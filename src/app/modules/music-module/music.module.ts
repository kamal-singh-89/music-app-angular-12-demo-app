import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { MusicRoutingModule } from './music-routing.module';
import { AddMusicComponent } from '../components/add-music/add-music.component';
import { MusicListComponent } from '../components/music-list/music-list.component';
import { MusicDetailComponent } from '../components/music-detail/music-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AddMusicComponent,
    MusicListComponent,
    MusicDetailComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    TabsModule.forRoot(),
    SharedModule
  ]
})
export class MusicModule { }
