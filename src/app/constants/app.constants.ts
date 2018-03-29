import { environment } from '../../environments/environment';

/**
 * Constants object which can hold app level constants
 */
export const APP_CONSTANTS = {
  BASE_API_URL: environment.API_URL,
  AUTH_TOKEN_URL: `https://github.com/login/oauth/access_token`,
  TOKEN_TYPES: {
    BEARER: 'bearer'
  },
  WEB_STORAGE_TYPE: {
    LOCAL: 'local',
    SESSION: 'session'
  },
  USER_ROLES: {
    ADMIN: 'ROLE_ADMIN',
    USER: 'ROLE_USER'
  }
};
