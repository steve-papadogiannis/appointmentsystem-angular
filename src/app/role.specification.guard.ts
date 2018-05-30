import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {User} from './user';

@Injectable()
export class RoleSpecificationGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = <User> JSON.parse(localStorage.getItem('currentUser'));
    const isRoleUndefined = user && (user.role !== undefined);
    if (isRoleUndefined) {
      return isRoleUndefined;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/role'], { queryParams: { returnUrl: state.url }});
    return false;
  }

}
