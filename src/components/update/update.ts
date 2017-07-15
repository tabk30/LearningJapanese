import { Component } from '@angular/core';
import {AppUpdateProvider} from '../../providers/app-update/app-update';
import { AppSetting } from '../../providers/config/app-setting/app-setting';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the UpdateComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'update',
  templateUrl: 'update.html'
})
export class UpdateComponent {

  private channel:string;
  private allChannel:Array<string>;

  constructor(private appUpdate: AppUpdateProvider, private appConfig:AppSetting,
    public alertCtrl: AlertController) {
    console.log('[HomePage:constructor]');
    this.allChannel = new Array<string>();
    this.channel = this.appUpdate.getChannel();
    this.appConfig.switchToEvn(this.channel);
    this.initAllChannel();
  }

  private switchToChannel($event){
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
    this.appUpdate.runUpdate($event);
  }

  private initAllChannel(){
    let allChannelObject = this.appConfig.getAllEvn();
    for(let key in allChannelObject){
      if(key){
        this.allChannel.push(key);
      } 
    }
  }

}
