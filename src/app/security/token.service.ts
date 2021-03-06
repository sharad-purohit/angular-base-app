import { Injectable } from '@angular/core';
import { APP_CONSTANTS } from '../constants/app.constants';
import { WebStorageService } from './web-storage.service';

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
@Injectable()
export class TokenService {

  /**
   * Browser window object
   */
  private window: Window;

  /**
   * To hold the storage service
   */
  private storage: Storage;

  constructor(private storageService: WebStorageService) {
    this.storage = this.storageService.getStorage(APP_CONSTANTS.WEB_STORAGE_TYPE.LOCAL);
  }

  /**
   * Get currently saved token object i. e. the complete oauth token object
   */
  public getTokenInfo(): string {
    return this.storage.getItem(ACCESS_TOKEN);
  }

  /**
   * Saves token in local storage of browser (can be changed to session storage if required)
   * @param token token to be saved
   */
  public saveToken(token: any): void  {
    this.storage.setItem(ACCESS_TOKEN, token);
  }

  /**
   * Remove the token from storage
   */
  public removeToken(): void {
    return this.storage.removeItem(ACCESS_TOKEN);
  }

  /**
   * Get only the access token from storage
   */
  public getAccessToken(): string {
    return JSON.parse(this.getTokenInfo()) ? JSON.parse(this.getTokenInfo())[ACCESS_TOKEN] : null;
  }

  /**
   * Get only the refresh token from storage
   */
  public getRefreshToken(): string {
    return JSON.parse(this.getTokenInfo())[REFRESH_TOKEN] ? JSON.parse(this.getTokenInfo()) : null;
  }
}
