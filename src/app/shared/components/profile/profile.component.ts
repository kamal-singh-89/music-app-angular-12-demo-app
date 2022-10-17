import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  currentCompnent = '';

  constructor(
    private readonly activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activedRoute.url.subscribe((params) => {
      this.currentCompnent = this.activedRoute.routeConfig?.component?.name ? this.activedRoute.routeConfig.component.name : '';      
    });
  }

}
