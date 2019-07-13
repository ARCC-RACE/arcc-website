import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { take, map, tap, catchError } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../_models/user.model';

/**
 * Protects routes so only admins can access
 */
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private router: Router) {}
    user: User;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.user$.pipe( // Gets user
        take(1),
        map(user => !!user.admin), // Maps user to if they're admin
        catchError(err => { // If error (user doesn't have admin attribute), throw error
          this.router.navigate(['/']);
          return throwError(err);
        }),
        tap(loggedIn => {
          if (!loggedIn) {
            console.log('access denied');
            this.router.navigate(['/']);
          }
        })
      );
  }
}
