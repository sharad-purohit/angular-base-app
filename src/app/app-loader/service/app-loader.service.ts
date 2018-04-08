import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppLoaderService {
  /**
   * Subject an multicast observable for showing loader
   */
  private loader: Subject<boolean> = new Subject();

  /**
   * Returns the loader subject that can be subscribed upon
   */
  getLoader(): Subject<boolean> {
    return this.loader;
  }
  /**
   * Shows the loader
   */
  show() {
    this.loader.next(true);
  }

  /**
   * Hides the loader
   */
  hide() {
    this.loader.next(false);
  }

}
