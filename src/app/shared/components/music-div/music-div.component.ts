import { Component, Input, OnInit } from '@angular/core';
import { COMMON_CONFIG } from 'src/app/core/enums/const-option.enum';
import { IMusicAlbum } from 'src/app/core/models/music.interface';

@Component({
  selector: 'app-music-div',
  templateUrl: './music-div.component.html',
  styleUrls: ['./music-div.component.scss']
})
export class MusicDivComponent implements OnInit {

  @Input() musicList: IMusicAlbum[] = [];
  imagePath = COMMON_CONFIG.imagePath;

  constructor() { }

  ngOnInit(): void {
  }

}
