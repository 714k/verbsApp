import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NavService } from '../../nav/nav.service';

@Component({
  selector: 'verbs-app-irregular-verbs',
  templateUrl: './irregular-verbs.component.html',
  styleUrls: ['./irregular-verbs.component.less'],
  //providers: [ContentService]
})
export class IrregularVerbsComponent implements OnInit {
	//dataSection: any;
	//subscription: Subscription;
	
	sectionTitle = 'Irregular Verbs';

  constructor(private navService: NavService) {
		/*
			this.subscription = this.navService.getCurrentSection().subscribe(data => { 
			this.dataSection = data; 
			this.sectionTitle = data.titleSection;
			console.log('data: ', data);
		});
		//console.log('this.sectionTitle:', this.sectionTitle);
		
		*/
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    //this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
