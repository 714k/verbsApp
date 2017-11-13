import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NavService, MenuItem } from '../nav/nav.service';

@Component({
  selector: 'app-verbs-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {
  currentSection: any;
	subscription: Subscription;

  constructor(private navService: NavService) {
		this.subscription = this.navService.getCurrentSection().subscribe(data => { 
			this.currentSection = data.currentSection;

		});
		//this.subscription = this.contentService.getDataSection().subscribe(data => { this.currentSection = data.currentSection; });
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
