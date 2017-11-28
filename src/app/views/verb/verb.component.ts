import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verbs-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.less']
})
export class VerbComponent implements OnInit {
  sectionTitle: string;

  constructor(private route: ActivatedRoute) {
    this.sectionTitle = this.route.snapshot.params.verb || this.route.snapshot.url[1].path;
    /*
    console.log('ActivatedRoute: ', this.route);
    console.log('snapshot: ', this.route.snapshot);
    console.log('snapshot.params.verb: ', this.route.snapshot.params.verb);
    console.log('snapshot.url[1].path: ', this.route.snapshot.url[1].path);
    */
  }

  ngOnInit() {
  }

}
