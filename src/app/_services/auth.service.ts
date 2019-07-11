import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user.model';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, DocumentSnapshot } from '@angular/fire/firestore';

import { Observable, of, Subject } from 'rxjs';
import { switchMap, take, map, tap } from 'rxjs/operators';
import { Post } from '../_models/post.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

    user$: Observable<User>;
    userFromDatabase$: Observable<boolean>;
    postDoc: any;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {
       // Get the auth state, then fetch the Firestore user document or return null
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      );
    }

    async googleSignin() {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      return this.updateUserData(credential.user);
    }

    public updateUserData(user) {
      // Sets user data to firestore on login
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

      const data = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        admin: false
      };

      return userRef.set(data, { merge: true });

    }

    public getBlogPosts(): Observable<Post> {
      const post = new Subject<Post>();
      this.user$.subscribe(user => {
        this.postDoc = this.afs.doc('posts/' + user.uid);
        this.postDoc.get().subscribe(value => {
          console.log(value);
        });
        post.next(this.postDoc.valueChanges());
      });

      return post.asObservable();
      // @ts-ignore
    }

    getUserData(): Observable<any> {
      return this.user$.pipe(take(1), map(value => {
        return this.afs.doc(`users/${value.uid}`).snapshotChanges();
      }));
    }

    async signOut() {
      await this.afAuth.auth.signOut();
      this.router.navigate(['/']);
    }

}
