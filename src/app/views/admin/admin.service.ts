import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

//import { of } from 'rxjs/observable/of';
//import { catchError, map, tap } from 'rxjs/operators';

import { Verb } from './verb';

@Injectable()
export class VerbsService {
	private verbsUrl = 'http://localhost:4200/api/v1/irregular-verbs';  // URL to web api

  constructor(private http: Http) { }

  getAllVerbs(): Observable<Verb[]> {
    return this.http.get(this.verbsUrl)
   .map(this.extractData)
   .catch(this.handleErrorObservable);
  }

  /** POST: add a new verb to the server */
  addVerb (verb: Verb): Observable<Verb[]> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.verbsUrl, verb, options)
    	.map(this.extractData)
    	.catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
		let body = res.json();
    return body.data || {};
	}

  private handleErrorObservable (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
  }
}