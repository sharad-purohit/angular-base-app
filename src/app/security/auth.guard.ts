import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { TokenService } from './token.service';

/**
 * Authentication/Authorization related guard to activate or deactivate routes
 */
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public authenticationService: AuthenticationService,
    public router: Router,
    private tokenService: TokenService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authenticationService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
