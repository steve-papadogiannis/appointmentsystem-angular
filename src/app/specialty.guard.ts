import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class SpecialtyGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = <User> JSON.parse(localStorage.getItem('currentUser'));
    const isDoctor = user && (user.role !== undefined) && user.role === 'Doctor' && user.specialty !== undefined;
    if (isDoctor) {
      return isDoctor;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/specialties'], {queryParams: {returnUrl: state.url}});
    return false;
  }

}
