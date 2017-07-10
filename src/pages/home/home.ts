import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppUpdateProvider} from '../../providers/app-update/app-update';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private channel:string;
  private allChannel:Array<string>;
  // private selectType:string = "popover";
  constructor(public navCtrl: NavController,
  private appUpdate: AppUpdateProvider) {
    this.allChannel = new Array<string>();
    this.initAllChannel();
  }

  private channelSelect($event){
    console.log('[HomePage:channelSelect]', $event);
    this.appUpdate.switchToEnv($event);
  }

  private initAllChannel(){
    let allChannelObject = this.appUpdate.getAllEnv();
    this.channel = this.appUpdate.getCurrentEnv();
    for(let key in allChannelObject){
      if(key){
        this.allChannel.push(key);
      } 
    }
  }
}
