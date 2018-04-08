import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {APP_CONSTANTS} from '../constants/app.constants';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {TokenService} from './token.service';
import {AuthorizationService} from './authorization.service';
import {TOKENS} from '../constants/sample-token.constants';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

/**
 * Houses Authentication related methods
 */
@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private tokenService: TokenService, private authorizationService: AuthorizationService) {
  }

  /**
   * Strigify the login response object
   * @param loginResp login respose json
   */
  private strigifyToken(loginResp: any): string {
    return JSON.stringify(loginResp);
  }

  /**
   * Authenticate the user
   * @param userInfo user information
   */
  authenticate(userInfo: any): Observable<string> {
    return this.http.post(`${APP_CONSTANTS.BASE_API_URL}/oauth/token`, null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        'grant_type': 'password',
        'client_id': 'mma_app',
        'client_secret': 'mma_app_s3cr3t',
        'username': userInfo.userName,
        'password': userInfo.password,
        'scope': 'read,write,trust'
      }
      // These params can be passed based on your need
    }).map(loginResp => {
      return this.strigifyToken(loginResp);
    });
  }

  /**
   * Checks if user is authenticated
   */
  isAuthenticated(): boolean {
    // Dummy implementation can be improved upon to check for expiry/validity of the token
    const token = this.tokenService.getAccessToken();
    if (token) {
      return true;
    } else {
      return false;
    }
  }

}
