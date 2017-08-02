import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSetting } from '../../providers/config/app-setting/app-setting';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http, private config: AppSetting) {
    console.log('Hello HttpProvider Provider');
  }

  public post(api: string, params: object, showLoading = true): Observable<object> {
    this.showLoading(showLoading);

    let baseUrl: string = this.config.getBaseURL();
    let fullAPI: string = baseUrl + api;
    let bodyString: string = JSON.stringify(params); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(fullAPI, bodyString, options) // ...using post request
      .map((res: Response) => {
        console.log("HTTP response", res.json());
        return res.json()['json'];
      }) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  public get(api: string, params: object, showLoading = true) {

  }

  private showLoading(isShow: boolean) {

  }

  private hidentLoading(isShow: boolean) {

  }
}
