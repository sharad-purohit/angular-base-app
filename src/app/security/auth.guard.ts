import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {AuthorizationService} from './authorization.service';
import {AppAlertService} from '../app-alert/service/app-alert.service';

/**
 * Authentication/Authorization related guard to activate or deactivate routes
 */
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public authenticationService: AuthenticationService,
              public router: Router,
              private location: Location,
              private authorizationService: AuthorizationService,
              private alertService: AppAlertService) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authenticationService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    const role = route.data.role;
    const userRoles = this.authorizationService.getUserRoles();
    const isAuthorized = userRoles.some(r => r === role);
    if (!isAuthorized) {
      this.location.back();
      this.alertService.alertError(['Access Denied!']);
      return false;
    }
    return true;
  }
}
