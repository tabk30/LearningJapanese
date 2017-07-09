import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppUpdateProvider} from '../../providers/app-update/app-update';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
  private appUpdate: AppUpdateProvider) {
  }
}
