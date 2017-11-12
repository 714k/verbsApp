import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavService, MenuItem } from './nav.service';

@Component({
  selector: 'verbs-app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
	mainMenuItems;
	currentSection;
  titleSection;
  showNav:boolean = false;
/*	menuItems = [
		'Home',
		'Verbs Introduction',
		'Regular Verbs',
		'Irregular Verbs',
		'Phrasal Verbs',
		'The Verb To BE',
		'Verbs With Prepositions',
		'Verbs With Two Objects',
		'Verbs With Two Objects',
		'State Verbs / dynamic Verbs',
		'The imperative'
	];
*/
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
    console.log('toggleNav');
  }

  ngOnInit() {
  	//console.log('mainMenuItems', this.mainMenuItems);
  	//console.log('activeMenuItem$', this.activeMenuItem$);
  }

}
