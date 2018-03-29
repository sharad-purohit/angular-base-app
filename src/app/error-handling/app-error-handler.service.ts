import { ErrorHandler, Injectable, NgZone, ApplicationRef, Injector } from '@angular/core';
import { AppAlertService } from '../app-alert/service/app-alert.service';
import { MessageResolverService } from '../message-resolver/message-resolver.service';
import { HTTP_STATUS } from '../constants/error-status.constants';
import { Router } from '@angular/router';
import { TokenService } from '../security/token.service';

@Injectable()
export class AppErrorHandler {

  constructor(private alertService: AppAlertService,
    private injector: Injector,
    private messageResolver: MessageResolverService,
    private router: Router,
    private tokenService: TokenService) {

  }
  handleError(error, errMessages: Array<string>) {
    //  Show error alert
    this.alertService.alertError(this.messageResolver.resolve(errMessages));

    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    throw error;
  }
}
