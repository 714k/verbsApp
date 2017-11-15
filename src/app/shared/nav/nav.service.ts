import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Injectable, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

export class MenuItem {
  path: string;
  title: string;
  level: string;
}

export class SubMenuItem {
  path: string;
  title: string;
  level: string;
  parent: string;
}

@Injectable()
export class NavService {
  activeMenuItem$: Observable<MenuItem>;
  activeSubMenuItem$: Observable<SubMenuItem>;

  private section = new Subject<any>();
  private title = new Subject<any>();

  constructor(private router: Router) {}

  getMenuItems(): MenuItem[] {
    return this.router.config
      .filter(route => route.data && route.data.level === 'one')
      .map(route => {
        return {
          path: route.path,
          title: route.data.title,
          level: route.data.level
        }
      });
  }

  getSubMenuItems(): SubMenuItem[] {
    //console.log('config: ', this.router.config);
    return this.router.config
      .filter(route => route.data && route.data.level)
      .map(route => {
        return {
          path: route.path,
          title: route.data.title,
          level: route.data.parent,
          parent: route.data.parent
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