import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AppUpdateProvider} from '../app-update/app-update';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http, private app:AppUpdateProvider) {
    console.log('Hello HttpProvider Provider');
  }

  public post(api:string, params:object, showLoading=true):Observable<object> {
    let bodyString = JSON.stringify(params); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post("", bodyString, options) // ...using post request
                        .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  public get(api:string, params:object, showLoading=true){

  }

  private showLoading(isShow:boolean){

  }

  private hidentLoading(isShow:boolean){

  }
}
