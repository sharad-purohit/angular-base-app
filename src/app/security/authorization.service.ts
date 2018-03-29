import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

/**
 * Utilities to check for user roles
 */
@Injectable()
export class AuthorizationService {

  private userRoles: Array<string>;

  constructor(private tokenService: TokenService) { }

  /**
   * Returns roles of the user
   *
   * Note: Right now returns role from token assuming user has only one role can be changed later
   */
  getUserRoles() {
    return JSON.parse(this.tokenService.getTokenInfo())['authorities'];
  }
}

