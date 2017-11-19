import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Injectable, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

export class MenuItem {
  path: string;
  title: string;
  children?: any;
}

export class SubMenuItem {
  children?: any;
}

@Injectable()
export class NavService {
  activeMenuItem$: Observable<MenuItem>;
  activeSubMenuItem$: Observable<SubMenuItem>;

  private section = new Subject<any>();
  private title = new Subject<any>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  getMenuItems(): MenuItem[] {
    return this.router.config
      .filter(route => route.data && route.data.title)
      .map(route => {
        return {
          path: route.path,
          title: route.data.title,
          children: route.children
        }
      });
  }

  getSubMenuItems(): SubMenuItem[] {
    console.log('route: ', this.route);
    console.log('router: ', this.router);
    return this.router.config
      .filter(route => route.data && route.children)
      .map(route => {
        return {
          children: route.children
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