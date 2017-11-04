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

  ngOnInit() {
  }

}
