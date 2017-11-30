import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerbsService } from '../../shared/services/verbs.service';

@Component({
  selector: 'app-verbs-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.less']
})
export class VerbComponent implements OnInit {
  sectionTitle: string;

  constructor(
    private route: ActivatedRoute,
    private verbsService: VerbsService
  ) {
    this.sectionTitle = this.route.snapshot.params.verb || this.route.snapshot.url[1].path;
    this.getVerbByTitle(this.sectionTitle);
   
    /*
    console.log('ActivatedRoute: ', this.route);
    console.log('snapshot: ', this.route.snapshot);
    console.log('snapshot.params.verb: ', this.route.snapshot.params.verb);
    console.log('snapshot.url[1].path: ', this.route.snapshot.url[1].path);
    */
  }

  getVerbByTitle(title: string) {
    this.verbsService.getVerbByTitle(title)
      .subscribe((data: any[]) => {
        console.log('single verb: ', data);
      });
  }


  ngOnInit() {
  }

}
