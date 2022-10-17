import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDivComponent } from './music-div.component';

describe('MusicDivComponent', () => {
  let component: MusicDivComponent;
  let fixture: ComponentFixture<MusicDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
