import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { APP_CONSTANTS } from '../constants/app.constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TokenService } from './token.service';
import { AuthorizationService } from './authorization.service';
import { TOKENS } from '../constants/sample-token.constants';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

/**
 * Houses Authentication related methods
 */
@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private tokenService: TokenService, private authorizationService: AuthorizationService) { }

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
    const userName = userInfo.userName;
    // this is a dummy implementation
    const token = userInfo.userName === 'admin' ? TOKENS.ADMIN : TOKENS.USER;
    return Observable.create(observer => {
      if (userName !== 'admin' && userName !== 'user') {
        observer.error(new HttpErrorResponse({
          error: {
            message: 'Wrong Credentials'
          },
          status: 403,
          statusText: 'Wrong Credentials'
        }));
       // observer.error(new Error('Wrong Credentials'));
      }
      observer.next(token);
      observer.complete();
    }).map((loginResp) => {
      return this.strigifyToken(loginResp);
    });

    // Use this based on the requirement


    /* return this.http.post(`${APP_CONSTANTS.AUTH_TOKEN_URL}`, null, {
      headers: {
        'Accept': 'application/json'
      },
      // These params can be passed based on your need
      params: {
        client_id: '',
        client_secret: '',
        username: userInfo.userName,
        password: userInfo.password,
      }
    }).map(loginResp => {
      return this.strigifyToken(loginResp);
    }); */
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
