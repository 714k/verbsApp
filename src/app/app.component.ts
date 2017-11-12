import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'verbs-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent implements OnInit{
  title = 'app';
  isRoot: boolean;

  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  // LocationStrategy Back/Forward
  goBack() {
    this.location.back();
  }

  goForward() {
    this.location.forward();
  }

  getPath() {
    console.log(this.location.path());
  }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        if (this.location.path() !== '') {this.isRoot = false}
          this.isRoot = true;
          this.titleService.setTitle(event['title'] + ' | VerbsApp');
      });
  }

}
