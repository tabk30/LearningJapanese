import { Component, Type } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VocaStartComponent } from '../../components/voca-start/voca-start';
import { VocaQ1ContainerComponent } from '../../components/voca-q1-container/voca-q1-container';
/**
 * Generated class for the ExamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {
  public component1:Type<any> = VocaStartComponent;
  public component1Data:Object = "test component 1";
  public component2:Type<any> = VocaQ1ContainerComponent;
  public component2Data:Object = "test component 2";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamPage');
  }

}
