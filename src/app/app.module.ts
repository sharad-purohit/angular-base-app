import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { RouterModule } from '@angular/router';
import { SecurityModule } from './security/security.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_CONSTANTS } from './constants/app.constants';
import { AppAlertModule } from './app-alert/app-alert.module';
import { AppLoaderModule } from './app-loader/app-loader.module';
import { TestService } from './test.service';
import { AppErrorHandler } from './error-handling/app-error-handler.service';
import { AppHttpInterceptor } from './security/app-http.interceptor';
import { MessageResolverService } from './message-resolver/message-resolver.service';

/* export function tokenGetter() {
  const token = localStorage.getItem('access_token');
  console.log('Got the token', token);
  return token;
} */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SecurityModule,
    HttpClientModule,
    AppAlertModule,
    AppLoaderModule
  ],
  providers: [
    AppErrorHandler,
    TestService,
    MessageResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
