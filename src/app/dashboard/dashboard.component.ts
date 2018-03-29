import { Component, ErrorHandler } from '@angular/core';
import { AppAlertService } from '../app-alert/service/app-alert.service';
import { TestService } from '../test.service';
import { AppLoaderService } from '../app-loader/service/app-loader.service';
import { Router } from '@angular/router';
import { TokenService } from '../security/token.service';
import { AppErrorHandler } from '../error-handling/app-error-handler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  testData: any;

  constructor(private alertService: AppAlertService,
    private testService: TestService,
    private loader: AppLoaderService,
    private router: Router,
    private tokenService: TokenService, private errorHandler: AppErrorHandler) { }

  /**
   * Fetch test data
   */
  getData() {
    this.loader.show();
    this.testService.getTestData().subscribe(data => {
      this.testData = data;
    }, error => {
      this.loader.hide();
      this.errorHandler.handleError(error, ['error.resource.not.found']);
    }, () => {
      this.loader.hide();
    });
  }

  /**
   * Show alert message when show alert button is clicked
   */
  showAlert() {
    this.alertService.alertSuccess(['It was successfull', 'I am coming home']);
  }

  /**
   * sign out the user
   */
  signOut() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('login');
  }
}
