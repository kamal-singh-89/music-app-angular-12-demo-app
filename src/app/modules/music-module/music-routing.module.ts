import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMusicComponent } from '../components/add-music/add-music.component';
import { MusicDetailComponent } from '../components/music-detail/music-detail.component';
import { MusicListComponent } from '../components/music-list/music-list.component';

const routes: Routes = [
  { path: '', component: MusicListComponent },
  { path: 'add-music', component: AddMusicComponent },
  { path: 'detail', component: MusicDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
