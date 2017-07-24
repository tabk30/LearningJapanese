import { Component } from '@angular/core';
import { AppUpdateProvider } from '../../providers/app-update/app-update';
import { AppSetting } from '../../providers/config/app-setting/app-setting';
import { NavController, AlertController, Alert } from 'ionic-angular';

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

  private channel: string;
  private allChannel: Array<string>;
  private selectOptions = {
    title: 'Chọn channel',
    subTitle: 'Sau khi đồng ý sẽ update code mơi nhất của chanel đó.',
    mode: 'md'
  };

  constructor(public navCtrl: NavController,
    private appUpdate: AppUpdateProvider,
    private appConfig: AppSetting,
    private alertCtrl: AlertController) {
    this.allChannel = new Array<string>();
    this.channel = this.appUpdate.getChannel();
    this.appConfig.switchToEvn(this.channel);
    this.initAllChannel();
    this.appUpdate.runUpdate(this.channel);
  }

  public switchToChannel($event) {
    this.appUpdate.runUpdate($event);
  }

  private initAllChannel() {
    let allChannelObject = this.appConfig.getAllEvn();
    for (let key in allChannelObject) {
      if (key) {
        this.allChannel.push(key);
      }
    }
  }
}
