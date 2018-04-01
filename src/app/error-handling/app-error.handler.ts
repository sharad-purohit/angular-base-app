import { ErrorHandler, Injectable, NgZone, Injector } from '@angular/core';
import { AppAlertService } from '../app-alert/service/app-alert.service';
import { HTTP_STATUS } from '../constants/error-status.constants';
import { Router } from '@angular/router';
import { TokenService } from '../security/token.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageResolver } from '../utils/message-resolver.util';

/**
 * Custom Error handler
 * Not being used right now but can be
 */
@Injectable()
export class AppErrorHandler implements ErrorHandler {
  handleError(error: any) {
    // As Error handler gets initialized before providers are setup use injector to get hold of services
    console.error(JSON.stringify(error));
  }
}
