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
  private section = new Subject<any>();
  private title = new Subject<any>();

  constructor(private router: Router) {}

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

  sendCurrentSection(section: any) {
    this.section.next({currentSection: section});
  }

  getCurrentSection(): Observable<any> {
    return this.section.asObservable();
  }

  clearCurrentSection() {
    this.section.next();
  }

}