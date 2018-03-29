import { Injectable } from '@angular/core';
import { ERROR_MESSAGES } from '../constants/error-messages.constants';

/**
 * Resolves the actual messages based on the message code from message constants
 */
@Injectable()
export class MessageResolverService {

  constructor() { }

  resolve(messageCodes: Array<string>) {
    return messageCodes.map(code => ERROR_MESSAGES[code]);
  }

}
