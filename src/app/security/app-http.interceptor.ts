import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { TokenService } from '../security/token.service';
import { Router } from '@angular/router';
import { HTTP_STATUS } from '../constants/error-status.constants';

/**
 * Custom HttpInterceptor to add authorization to every http request
 */
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, private router: Router) { }

  /**
   * Implementation of intercept method
   * @param req http request
   * @param next next http handler to be called
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.tokenService.getAccessToken();
    // Set the Authorization header after cloning the request
    const authReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${authToken}`) });

    // Forward the request to subsequent handlers
    return next.handle(authReq);
  }
}
