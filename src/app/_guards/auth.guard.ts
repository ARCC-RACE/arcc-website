import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { take, map, tap } from 'rxjs/operators';

/**
 * Allows routes only if user is logged in
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.user$.pipe(
        take(1), // Takes first user
        map(user => !!user), // <-- map to boolean
        tap(loggedIn => { // Tap makes it a function
          if (!loggedIn) { // If not logged in navigate to login page
            console.log('access denied');
            this.router.navigate(['/auth']);
          }
        })
      );
  }

}
