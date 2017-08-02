import { Component } from '@angular/core';
import { AppUpdateProvider } from '../../providers/app-update/app-update';
import { AppSetting } from '../../providers/config/app-setting/app-setting';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  constructor(private appUpdate: AppUpdateProvider,
    private appConfig: AppSetting,
    private alertCtrl: AlertController,
    private storage: Storage) {
    this.initChannel();
    this.initAllChannel();
  }

  private initChannel() {
    this.storage.get('app_update_channel').then((value) => {
      console.log("[UpdateComponent:initChannel] value", value);
      if (value) {
        this.channel = value;
        this.appConfig.switchToEvn(this.channel);
        this.appUpdate.runUpdate(this.channel);
      } else {
        this.channel = 'production';
        this.appConfig.switchToEvn(this.channel);
        this.appUpdate.runUpdate(this.channel);
      }
    });
  }

  public switchToChannel($event) {
    this.storage.set('app_update_channel', $event);
    this.appConfig.switchToEvn(this.channel);
    this.appUpdate.runUpdate(this.channel);
  }

  private initAllChannel() {
    this.allChannel = new Array<string>();
    let allChannelObject = this.appConfig.getAllEvn();
    for (let key in allChannelObject) {
      if (key) {
        this.allChannel.push(key);
      }
    }
  }
}
