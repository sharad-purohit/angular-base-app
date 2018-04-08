import { Component, OnDestroy } from '@angular/core';
import { AppAlertService } from '../service/app-alert.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.scss']
})
export class AppAlertComponent implements OnDestroy {

  /**
   * Alerts array
   */
  alerts = [];

  /**
   * Alert subscription
   */
  alertsSubscription: Subscription;

  constructor(private alertService: AppAlertService) {
    // Subscribing to the alert subject
    this.alertsSubscription = alertService.getAlert().subscribe(config => {
      this.alerts.push(config);
    });
  }

  /**
   * Remove alert from alerts array on closed
   * @param dismissedAlert alert which gets closed
   */
  onClosed(dismissedAlert: AppAlertComponent) {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }


  ngOnDestroy() {
    this.alertsSubscription.unsubscribe();
  }
}
