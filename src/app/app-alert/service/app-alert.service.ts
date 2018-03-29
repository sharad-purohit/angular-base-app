import { Injectable } from '@angular/core';
import { AppAlertConfig } from './app-alert.config';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

/**
 * Service to help publish alerts on application
 */
@Injectable()
export class AppAlertService {

  /**
   * Subject a type of multicast observable for showing alert message
   * This can be subscribed to start receiving alert events
   */
  private alert: Subject<AppAlertConfig> = new Subject();

  /**
   * Default timeout time in milliseconds for the alert to dismiss automatically
   */
  private DEFAULT_DISMISS_TIMEOUT = 3000;

  /**
   * Default value for whether an alert should be dismissible or not
   */
  private DEFAULT_DISMISSIBLE = true;

  /**
   * Return the alert subject that can be sbscribed upon
   */
  public getAlert(): Subject<AppAlertConfig> {
    return this.alert;
  }
  /**
   * Alerts Error
   * @param message message to be displayed inside alert
   * @param dismissOnTimeout timeout time for the alert to dismiss automatically
   * @param dismissable whether alert is dismissible or not
   */
  public alertError(messages: Array<string>, dismissOnTimeout?: number, dismissable?: boolean) {
    this.showAlert({
      messages: messages,
      dismissOnTimeout: dismissOnTimeout ? dismissOnTimeout : this.DEFAULT_DISMISS_TIMEOUT,
      type: 'danger',
      dismissible: dismissable ? dismissable : this.DEFAULT_DISMISSIBLE
    });
  }

  /**
   * Alerts Info
   * @param messages messages to be displayed inside alert
   * @param dismissOnTimeout timeout time for the alert to dismiss automatically
   * @param dismissable whether alert is dismissible or not
   */
  public alertInfo(messages: Array<string>, dismissOnTimeout?: number, dismissable?: boolean) {
    this.showAlert({
      messages: messages,
      dismissOnTimeout: dismissOnTimeout ? dismissOnTimeout : this.DEFAULT_DISMISS_TIMEOUT,
      type: 'info',
      dismissible: dismissable ? dismissable : this.DEFAULT_DISMISSIBLE
    });
  }

  /**
   * Alerts Warning
   * @param messages messages to be displayed inside alert
   * @param dismissOnTimeout timeout time for the alert to dismiss automatically
   * @param dismissable whether alert is dismissible or not
   */
  public alertWarning(messages: Array<string>, dismissOnTimeout?: number, dismissable?: boolean) {
    this.showAlert({
      messages: messages,
      dismissOnTimeout: dismissOnTimeout ? dismissOnTimeout : this.DEFAULT_DISMISS_TIMEOUT,
      type: 'warning',
      dismissible: dismissable ? dismissable : this.DEFAULT_DISMISSIBLE
    });
  }

  /**
   * Alerts Success
   * @param messages messages to be displayed inside alert
   * @param dismissOnTimeout timeout time for the alert to dismiss automatically
   * @param dismissable whether alert is dismissible or not
   */
  public alertSuccess(messages: Array<string>, dismissOnTimeout?: number, dismissable?: boolean) {
    this.showAlert({
      messages: messages,
      dismissOnTimeout: dismissOnTimeout ? dismissOnTimeout : this.DEFAULT_DISMISS_TIMEOUT,
      type: 'success',
      dismissible: dismissable ? dismissable : this.DEFAULT_DISMISSIBLE
    });
  }

  /**
   * Emits an event to show a alert message
   * @param config config object for alert
   */
  private showAlert(config: AppAlertConfig) {
    this.alert.next(config);
  }
}
