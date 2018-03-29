import { NgModule } from '@angular/core';
import { TokenService } from './token.service';
import { AuthenticationService } from './authentication.service';
import { WebStorageService } from './web-storage.service';
import { AuthorizationService } from './authorization.service';
import { AuthGuard } from './auth.guard';

/**
 * Module which houses all security related services
 */
@NgModule({
  providers: [
    AuthenticationService,
    AuthorizationService,
    TokenService,
    WebStorageService,
    AuthGuard]
})
export class SecurityModule {
}

