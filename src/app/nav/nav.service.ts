import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Injectable, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

export class MenuItem {
  path: string;
  title: string;
  icon?: string;
}

@Injectable()
export class NavService {
  activeMenuItem$: Observable<MenuItem>;
  private subject = new Subject<any>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {

    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => this.titleService.setTitle(event['title'] + ' | VerbsApp'));

  }

  getMenuItems(): MenuItem[] {
    return this.router.config
      .filter(route => route.data && route.data.title)
      .map(route => {
        return {
          path: route.path,
          title: route.data.title,
          icon: route.data.icon
        }
      });
  }

  sendCurrentSection(section: string) {
    this.subject.next({currentSection: section, titleSection: section});
  }

  getCurrentSection(): Observable<any> {
    return this.subject.asObservable();
  }

  clearCurrentSection() {
    this.subject.next();
  }

}