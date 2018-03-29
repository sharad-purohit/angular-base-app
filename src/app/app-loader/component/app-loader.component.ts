import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppLoaderService } from '../service/app-loader.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnDestroy {

  /**
   * Shows and hides the loader
   */
  showLoader = false;

  /**
   * Loader subscription
   */
  loaderSubscription: Subscription;


  constructor(private loaderService: AppLoaderService) {
    // Subscribing to the loader subject
    this.loaderSubscription = this.loaderService.getLoader().subscribe(state => {
      this.showLoader = state;
    });
  }

  /**
   * Unsubscribe to observables here before component is destroyed
   */
  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }
}
