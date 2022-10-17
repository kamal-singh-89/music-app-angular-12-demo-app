import { Component, OnInit } from '@angular/core';
import { COMMON_CONFIG } from 'src/app/core/enums/const-option.enum';
import { IMusic, IMusicAlbum } from 'src/app/core/models/music.interface';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html'
})
export class MusicListComponent implements OnInit {

  musicList: IMusicAlbum[] = [];
  newMusicList: IMusicAlbum[] = [];  
  imagePath = COMMON_CONFIG.imagePath;

  constructor(
    private readonly musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.getRecentMusic();
    this.getNewMusic();
  }

  getRecentMusic(): void {
    this.commonFunction(COMMON_CONFIG.ApiUrls.recent);
  }

  getPopular(): void{
    this.commonFunction(COMMON_CONFIG.ApiUrls.popular);
  }

  getFavorite(): void{
    this.commonFunction(COMMON_CONFIG.ApiUrls.favorite);
  }

  getTop(): void{
    this.commonFunction(COMMON_CONFIG.ApiUrls.top);
  }

  getNewMusic(): void{
    this.commonFunction(COMMON_CONFIG.ApiUrls.newMusic, COMMON_CONFIG.new);
  }

  commonFunction(url: any, type =''): void{
    this.musicService.getMusic(url).subscribe((res: IMusic) => {
      if(type === COMMON_CONFIG.new){
        this.newMusicList = res.recently;
      }else{
        if(res.recently){
          this.musicList = res.recently;
        }
      }
    });
  }
}
