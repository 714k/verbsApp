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

    const dataSubmenuItems = this.navService.getSubMenuItems();

    dataSubmenuItems.forEach((item, i) => {
      //console.log('item: ', item.parent);

      const parent = item.parent;
      const currentPath = window.location.hash.split('/')[1];
      if (parent === currentPath) {
        this.displaySubmenu = true;
        this.subMenuItems.push(item);
      }
    });
    this.activeSubMenuItem$ = this.navService.activeSubMenuItem$;
    this.subMenuItems = this.subMenuItems;
  }

  ngOnInit() {
     //console.log('this.subMenuItems: ', this.subMenuItems);
  }

}
