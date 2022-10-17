import { Injectable } from '@angular/core';
import { COMMON_CONFIG } from '../enums/const-option.enum';
import { IAuthToken } from '../models/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  beforeLoginUserRoute: string = COMMON_CONFIG.frontendUrls.detail;
  constructor() { }

  public isAuthenticated(): boolean {
    const token = this.getUserAccessToken();
    return !!(token && token.access);
  }
  
  removeUserAccessToken(): void {
    localStorage.removeItem(COMMON_CONFIG.tokenKey);
  }

  setUserAccessToken(token: any): void {
    localStorage.setItem(COMMON_CONFIG.tokenKey, JSON.stringify(token));
  }

  getUserAccessToken(): IAuthToken {
    return JSON.parse(localStorage.getItem(COMMON_CONFIG.tokenKey) || '{}') !== {} ?
      JSON.parse(localStorage.getItem(COMMON_CONFIG.tokenKey) || '{}') : false;
  }

}
