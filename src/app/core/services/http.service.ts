import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { COMMON_CONFIG } from '../enums/const-option.enum';
import { AuthService } from './auth.service';
import { UtilService } from './util.service';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders()
};

const baseUrl: string = environment.baseURL;


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService,
    private readonly utilService: UtilService
  ) {
    httpOptions.headers.set(COMMON_CONFIG.contentType, COMMON_CONFIG.applicationJson);
   }

   /**
   * @description For handle http request.
   * @param type request type
   * @param apiName API end point
   * @param showLoader loader status
   * @param data  request body
   */
  httpRequest(
    type: string,
    apiName: string,
    data?:any,
    headers?:any,
    isloader = true
  ): Observable<any> {
    const token = this.authService.getUserAccessToken();
    
    if (token && token.access) {
      httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${token.access}`);
    } else {
      httpOptions.headers = httpOptions.headers.delete('Authorization');
    }
    if (headers) {
      httpOptions.headers = httpOptions.headers.set(COMMON_CONFIG.contentType, `multipart/form-data; boundary=----`);
    } else {
      httpOptions.headers = httpOptions.headers.set(COMMON_CONFIG.contentType, COMMON_CONFIG.applicationJson);
    }
    this.utilService.isOnline();
    switch (type) {
      case 'GET':
        return this.http.get(`${baseUrl}${apiName}`, httpOptions).pipe(map(d => this.utilService.closeLoader(d, isloader)));
        break;
      
      default:
        return this.http.get(`${baseUrl}${apiName}`, httpOptions).pipe(map(d => this.utilService.closeLoader(d)));
        break;
    }
  }

}
