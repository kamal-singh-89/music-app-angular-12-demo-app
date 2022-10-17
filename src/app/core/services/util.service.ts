import { Injectable } from '@angular/core';
import { Message } from '../enums/messages.config';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /**
   * @description this function is used to check internet connection
   * @returns 
   */

  isOnline (): boolean {
    let status = false;
    if ( window.navigator.onLine ) {
      status = true;
    } else {
      alert( Message.INTERNET_CONNECTION_ERROR );
    }
    return status;
  }

  /**
   * @description this function used to close the ui loader
   */
   closeLoader ( data = {}, isLoader = true ) {
    if ( isLoader ) {
      // alert('We can define and close the loader here!');
    }
    return data;
  }

}
