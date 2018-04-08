import { Injectable } from '@angular/core';
import { AppLoaderService } from '../app-loader/service/app-loader.service';
import { AppAlertService } from '../app-alert/service/app-alert.service';
import { MessageResolver } from '../utils/message-resolver.util';
import { HttpErrorResponse } from '@angular/common/http';
import { HTTP_STATUS } from '../constants/error-status.constants';
import { TokenService } from '../security/token.service';
import { Router } from '@angular/router';

/**
 * Can be used to handle all errors and show alert notification
 */
@Injectable()
export class ErrorService {

  constructor(private loaderService: AppLoaderService,
    private alertService: AppAlertService,
    private tokenService: TokenService,
    private router: Router) {
  }

  /**
   * Handle errors
   * @param error error object of any types
   * @param hideLoader hide loader
   */
  public handleError(error: any, hideLoader?: boolean) {
    /**
     * Check if we were to hide loader
     */
    if (hideLoader) {
      this.loaderService.hide();
    }

    // Handle Http Error (error.status === 403, 404...)
    if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      if (!navigator.onLine) {
        // Handle offline error
        this.alertService.alertError(['No Internet Connection']);
      } else {
        if (error.status === HTTP_STATUS.NOT_AUTHENTICATED) {
          this.tokenService.removeToken();
          this.router.navigateByUrl('/login');
        }

        /**
          * Show an error alert
          */
        if (error['errors']) {
          this.alertService.alertError(MessageResolver.resolveErrorMessages(error['errors']));
        } else {
          this.alertService.alertError([`${error.status} - ${error.message}`]);
        }
      }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)
      this.router.navigate(['/error'], { queryParams: { error: error } });
    }
    throw error;
  }
}
