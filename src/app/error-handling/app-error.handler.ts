import {ErrorHandler, Injectable} from '@angular/core';

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
