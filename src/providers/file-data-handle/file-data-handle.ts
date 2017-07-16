import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FileHandlProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FileDataHandleProvider {

  constructor(private file: File) {
    console.log('Hello FileHandlProvider Provider');
  }

  private initDirAndFile():void{
  }

  public replateExamVersion(data:Object):Observable<Object>{
    let response:Observable<Object> = new Observable<Object>();
    return response;
  }

  public readExamVertion():Observable<Object>{
    let response:Observable<Object> = new Observable<Object>();
    return response;
  }

  public wrireExamData(data:Object):Observable<Object>{
    let response:Observable<Object> = new Observable<Object>();
    return response;
  }

  public getExamById(examId:string):Observable<Object>{
    let response:Observable<Object> = new Observable<Object>();
    return response;
  }
}
