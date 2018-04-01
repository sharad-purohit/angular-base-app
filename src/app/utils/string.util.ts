/**
 * String utilities for the app
 */
export class StringUtil {

  /**
   * Can replace a string which is parameterized in a specified format
   *
   * For Example:
   * let str1 = 'Hello, {1}' !!!;
   * StringUtil.parameterizeString(str1, 'you'); will return "Hello, you !!!"
   *
   * @param str string to be parameterized
   * @param params parameters to be used
   * @returns str parameterized string
   * Note: Params should be passed in the order you wish them to put in the string
   */
  public static parameterizeString(str: string, ...params): string {
    params.forEach((param, index) => {
      str = str.replace(`{${index}}`, param);
    });
    return str;
  }
}
