import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MusicDivComponent } from './components/music-div/music-div.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewMusicComponent } from './components/new/new-music.component';

@NgModule({
  declarations: [
    HeaderSearchComponent,
    ProfileComponent,
    FooterComponent,
    NewMusicComponent,
    MusicDivComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderSearchComponent,
    ProfileComponent,
    FooterComponent,
    NewMusicComponent,
    MusicDivComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
