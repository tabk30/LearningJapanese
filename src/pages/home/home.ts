import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExamApiProvider } from '../../providers/api/exam-api/exam-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private examApi: ExamApiProvider) {
    this.examApi.getExamData({
      "data": [
        {
          "id": "X999_Y999",
          "from": {
            "name": "Tom Brady", "id": "X12"
          },
          "message": "Looking forward to 2010!",
          "actions": [
            {
              "name": "Comment",
              "link": "http://www.facebook.com/X999/posts/Y999"
            },
            {
              "name": "Like",
              "link": "http://www.facebook.com/X999/posts/Y999"
            }
          ],
          "type": "status",
          "created_time": "2010-08-02T21:27:44+0000",
          "updated_time": "2010-08-02T21:27:44+0000"
        },
        {
          "id": "X998_Y998",
          "from": {
            "name": "Peyton Manning", "id": "X18"
          },
          "message": "Where's my contract?",
          "actions": [
            {
              "name": "Comment",
              "link": "http://www.facebook.com/X998/posts/Y998"
            },
            {
              "name": "Like",
              "link": "http://www.facebook.com/X998/posts/Y998"
            }
          ],
          "type": "status",
          "created_time": "2010-08-02T21:27:44+0000",
          "updated_time": "2010-08-02T21:27:44+0000"
        }
      ]
    }).subscribe(
      repose => {
        console.log("HomePage", repose);
        this.printConsoleLog(repose);
      } ,
      err =>{
        console.log("HomePage", err);
      }
    );
  }

  private printConsoleLog(data:Object){
    console.log("HomePage:printConsoleLog ", data);
  }
}
