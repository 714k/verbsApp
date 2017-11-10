import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'verbs-app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.less']
})
export class SubnavComponent implements OnInit {

  constructor(
  	private router: Router,
  	private route: ActivatedRoute
  ) { 
  	route.params.subscribe(params => {
  		console.log('subNav id parameter: ', params['id']);
  	});
  }

  navigate(path) {
  	console.log('path: ', path);
  	this.router.navigate([{
  		outlets: {
  			primary: path,
  			subnav: path
  		}
  	}],
  	{relativeTo: this.route});
  }

  ngOnInit() {
  }

}
