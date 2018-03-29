import { Injectable } from '@angular/core';
import { APP_CONSTANTS } from '../constants/app.constants';

/**
 * Service which lets you choose storage of your choice
 */
@Injectable()
export class WebStorageService {
  /**
   * Returns storage to be used to store data based on type
   * @param type local or session
   */
  getStorage(type: string): Storage {
    return type === APP_CONSTANTS.WEB_STORAGE_TYPE.LOCAL ? localStorage : sessionStorage;
  }
}
