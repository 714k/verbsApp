import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { VerbsService } from './admin.service';
import { Verb } from './verb';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'verbs-app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
	verb = new Verb();
	verbs;
	errorMessage: String;
	
	title: String;
	meaning: String;
	pathImg: String;
	infinitive: String;
	simplePast: String;
	pastParticiple: String;
	category: String;
	examples: [String];

	verbsForm: FormGroup;

  constructor(private http: Http, private verbsService: VerbsService) { 
  }

/*
  getAllVerbsB() {
  	this.verbs = this.http.get('/api/v1/irregular-verbs')
  	.map(res => {
  		console.log('json', res.json());
  		console.log('data', res.json().data);
  		res.json()
  	});
*/
  	getAllVerbs(): any {
    return this.http.get("http://localhost:4200/api/v1/irregular-verbs")
      .subscribe(response => {
        console.log(response);
      })

  	/*
      this.verbsService.getAllVerbs()
	    .subscribe( verbs => this.verbs = verbs,
                        error => this.errorMessage = <any>error);
                        */
	  }

  addVerb(form: any): void {
  	this.verbsService.addVerb(this.verb)
  	.subscribe( verb => {
  		this.title = form.title;
  		this.meaning = form.meaning;
  		this.pathImg = form.pathImg;
  		this.infinitive = form.infinitive;
  		this.simplePast = form.simplePast;
  		this.pastParticiple = form.pastParticiple;
  		this.category = form.category;
  		this.examples = form.examples;
  	});
  	console.log('form: ', form);
  }

  ngOnInit() {
  	//this.getAllVerbs();
  }
}
