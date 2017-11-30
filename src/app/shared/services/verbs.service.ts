import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import * as apiConf  from '../../core/apiConf';

@Injectable()
export class VerbsService {
  private actionUrl: string;

  constructor( private http: Http ) {
  	//console.log(apiConf.apiUrl)
  }

  getAllVerbs() {
    return this.http.get(apiConf.apiUrl + apiConf.verbsEndPoint)
		.map(this.extractData)
		.catch(this.handleError);
  }

  getVerbByTitle(title) {
    let url = apiConf.apiUrl + apiConf.verbsEndPoint + '/' + title;
	  return this.http.get(url)
		  .map(this.extractData)
		  .catch(this.handleError);
  }


  private extractData(res: Response) {
  	let body = res.json();
  	//console.log('body: ', body);
  	return body.data || {};
  }

  private handleError(error: Response | any) {
  	let errMsg: string;

  	if (error instanceof Response) {
  		const body = error.json();
  		const err = body.error || JSON.stringify(body);

  		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  	} else {
  		errMsg = error.message ? error.message : error.toString();
  	}

  	console.log('error message: ', errMsg);

  	return Observable.throw(errMsg);
  }

}


