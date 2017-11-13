import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { NavService, MenuItem, SubMenuItem } from '../nav/nav.service';

@Component({
  selector: 'app-verbs-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.less']
})
export class SubnavComponent implements OnInit {
  displaySubmenu = false;
  subMenuItems = [];
  currentSection;
  titleSection;
  activeSubMenuItem$: Observable<SubMenuItem>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navService: NavService,
    private location: Location
  ) {

    const dataChildren = this.navService.getSubMenuItems();

    dataChildren.forEach((item, i) => {
      const parent = item.children[i].path.split('/')[0];
      const currentPath = window.location.hash.split('/')[1];
      if (parent === currentPath) {
        this.displaySubmenu = true;
        this.subMenuItems.push(item.children);
      }
    });
    this.activeSubMenuItem$ = this.navService.activeSubMenuItem$;
    this.subMenuItems = this.subMenuItems[0];
  }

  ngOnInit() {
    // console.log('this.subMenuItems: ', this.subMenuItems);
  }

}
