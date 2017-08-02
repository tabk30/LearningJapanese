import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpProvider } from '../../http/http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ExamApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ExamApiProvider {

  constructor(public apiRequest: HttpProvider) {
    console.log('Hello ExamApiProvider Provider');
  }

  public getExamData(params:Object):Observable<Object> {
    return this.apiRequest.post('/post', params, true).map(repose => {
      console.log('[ExamApiProvider:getExamData]', repose);
      return repose;
    });
  }

}
