import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavService, MenuItem } from '../nav/nav.service';

@Component({
  selector: 'verbs-app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {
	mainMenuItems;

  constructor(private navService: NavService) {
		this.mainMenuItems = this.navService.getMenuItems();
  }

  ngOnInit() {
  }

}
