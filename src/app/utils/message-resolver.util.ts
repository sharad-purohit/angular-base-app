import { ERROR_MESSAGES } from '../constants/error-messages.constants';
import { StringUtil } from '../utils/string.util';
import { ApiSubError } from '../error-handling/api-sub-error';

/**
 * Resolves the actual messages based on the message code from message constants
 */
export class MessageResolver {

  /**
   * Resolve messages based on the message code from mapping file
   * @param errMessages error messages of type ApiSubError
   * @returns Array of resolved and parameterised messages
   */
  public static resolveErrorMessages(errMessages: Array<ApiSubError>): Array<string> {
    return errMessages.map(message => {
      return StringUtil.parameterizeString(ERROR_MESSAGES[message.code], message.params);
    });
  }
}
