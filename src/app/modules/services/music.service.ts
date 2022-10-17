import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { COMMON_CONFIG } from 'src/app/core/enums/const-option.enum';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(
    private readonly httpService: HttpService,
  ) { }

  /**
   * @desc call the music list API and get the data
   * @params void
   */
   getMusic(url: any): Observable<any> {
    return this.httpService.httpRequest('GET', url);
  }
}
