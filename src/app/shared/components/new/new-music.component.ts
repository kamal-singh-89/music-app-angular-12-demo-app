import { Component, Input, OnInit } from '@angular/core';
import { COMMON_CONFIG } from 'src/app/core/enums/const-option.enum';
import { IMusicAlbum } from 'src/app/core/models/music.interface';

@Component({
  selector: 'app-new',
  templateUrl: './new-music.component.html'
})
export class NewMusicComponent implements OnInit {

  @Input() newMusicList: IMusicAlbum[] = [];
  imagePath = COMMON_CONFIG.imagePath;

  constructor() { }

  ngOnInit(): void {
  }

}
