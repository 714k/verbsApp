import { Component, OnInit } from '@angular/core';
import { VerbsService } from '../../shared/services/verbs.service';

@Component({
  selector: 'app-all-verbs',
  templateUrl: './all-verbs.component.html',
  styleUrls: ['./all-verbs.component.less']
})
export class AllVerbsComponent implements OnInit {
	sectionTitle = 'All Verbs';
  allVerbs: any;

  constructor( private verbsService: VerbsService ) { }

  getAllVerbs() {
    this.verbsService.getAllVerbs()
      .subscribe((data: any[]) => {
        this.allVerbs = data;
        // console.log('data: ', data);
      });
  }

  ngOnInit() {
    this.getAllVerbs();
  }

}
