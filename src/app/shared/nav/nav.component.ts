import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavService, MenuItem } from './nav.service';

@Component({
  selector: 'app-verbs-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  mainMenuItems;
  currentSection;
  titleSection;
  showNav:boolean = false;
  activeMenuItem$: Observable<MenuItem>;

  constructor(private navService: NavService) {
    this.mainMenuItems = this.navService.getMenuItems();
    this.activeMenuItem$ = this.navService.activeMenuItem$;
  }

  setCurrentSection(currentSection) {
    this.currentSection = currentSection;
    this.sendCurrentSection();
    this.toggleNav();
  }

  sendCurrentSection(): void {
    this.navService.sendCurrentSection(this.currentSection);
    //console.log('this.currentSection: ', this.currentSection);
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }

  ngOnInit() {
    //console.log('mainMenuItems', this.mainMenuItems);
    //console.log('activeMenuItem$', this.activeMenuItem$);
  }

}
