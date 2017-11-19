import { Component, OnInit } from '@angular/core';
import { VerbsService } from '../../shared/services/verbs.service';

@Component({
  selector: 'app-verbs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  sectionTitle = 'Home';
  allVerbs: any;

  constructor( private verbsService: VerbsService ) { }

  getAllVerbs() {
    this.verbsService.getAllVerbs()
      .subscribe((data: any[]) => {
        this.allVerbs = data;
        //console.log('data: ', data);
      });
  }


  ngOnInit() {
    this.getAllVerbs();
  }

}
