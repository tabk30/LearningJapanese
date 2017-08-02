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
    console.log('Hello FileDataHandleProvider Provider');
    this.initDirAndFile();
  }

  private initDirAndFile(): void {
    this.initExamDir();
  }

  private initExamDir(): void {
    this.file.checkDir(this.file.dataDirectory, 'exam')
      .then(_ => console.log(' [FileDataHandleProvider:initExamDir] Directory exists'))
      .catch(err => {
        console.log('[FileDataHandleProvider:initExamDir] Init exam dir and subdir');
        this.file.createDir(this.file.dataDirectory, 'exam', false).then(success => {
          console.log('[FileDataHandleProvider:initExamDir] Init exam dir success');
          this.initAllExamFile();
        }).catch(error => {
          console.log('[FileDataHandleProvider:initExamDir] error', error);
        });

      });
  }

  private initAllExamFile() {
    this.file.createFile(this.file.dataDirectory + '/exam', 'ExamVersion.json', true).then(data => {
      console.log('[FileDataHandleProvider:initAllExamFile] /exam/ExamVersion.json sucess', data);
    }).catch(error => {
      console.log('[FileDataHandleProvider:initAllExamFile] /exam/ExamVersion.json error', error);
    });

    this.file.createDir(this.file.dataDirectory + '/exam', 'exam_data', false).then(success => {
      console.log('[FileDataHandleProvider:initAllExamFile] Init exam dir success');
    }).catch(error => {
      console.log('[FileDataHandleProvider:initAllExamFile] error', error);
    });

    this.file.createDir(this.file.dataDirectory + '/exam', 'meida', false).then(success => {
      console.log('[FileDataHandleProvider:initAllExamFile] Init exam dir success');
    }).catch(error => {
      console.log('[FileDataHandleProvider:initAllExamFile] error', error);
    });

    this.file.createDir(this.file.dataDirectory + '/exam', 'image', false).then(success => {
      console.log('[FileDataHandleProvider:initAllExamFile] Init exam dir success');
    }).catch(error => {
      console.log('[FileDataHandleProvider:initAllExamFile] error', error);
    });
  }

  public replateExamVersion(data: Object): Observable<Object> {
    let response: Observable<Object> = new Observable<Object>();
    return response;
  }

  public readExamVertion(): Observable<Object> {
    let response: Observable<Object> = new Observable<Object>();
    return response;
  }

  public wrireExamData(data: Object): Observable<Object> {
    let response: Observable<Object> = new Observable<Object>();
    return response;
  }

  public getExamById(examId: string): Observable<Object> {
    let response: Observable<Object> = new Observable<Object>();
    return response;
  }
}
