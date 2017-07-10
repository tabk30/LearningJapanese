import { Injectable } from '@angular/core';
import { Deploy } from "@ionic/cloud-angular";
import { LoadingController, ToastController } from "ionic-angular";
import { AppSetting } from '../config/app-setting/app-setting';
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AppUpdateProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AppUpdateProvider {

  private currentEnv: string = "production";
  private currentEnvObject: Object = {};
  private allEvn: Object = {};

  constructor(public deploy: Deploy,
    private readonly loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController,
    private appConfig: AppSetting,
    private platform: Platform,
    public alertCtrl: AlertController) {
    this.initENV();
    if (this.canRunUpdate()) {
      this.switchChannel();
      this.checkForUpdate();
    }
  }

  private initENV() {
    this.initEnvConfig();
  }

  checkForUpdate() {
    const checking = this.loadingCtrl.create({
      content: 'Checking for update...'
    });
    checking.present();

    this.deploy.check().then((snapshotAvailable: boolean) => {
      checking.dismiss();
      if (snapshotAvailable) {
        this.downloadAndInstall();
      }
      else {
        const toast = this.toastCtrl.create({
          message: 'No update available',
          duration: 3000
        });
        toast.present();
      }
    });
  }

  private downloadAndInstall() {
    const updating = this.loadingCtrl.create({
      content: 'Updating application...'
    });
    updating.present();
    this.deploy.download().then(() => this.deploy.extract()).then(() => this.deploy.load());
  }

  private canRunUpdate() {
    // Check If Cordova/Mobile
    if (this.platform.is('cordova')) {
      return true;
    } else {
      return false;
    }
  }

  private initEnvConfig() {
    this.allEvn = this.appConfig.getConfig('EVN');
    this.currentEnv = this.deploy.channel;
    this.currentEnvObject = this.allEvn[this.currentEnv];
  }

  public getAllEnv() {
    return this.allEvn;
  }

  public switchToEnv(env: string) {
    for (let key in this.allEvn) {
      if (key == env) {
        this.currentEnv = key;
        this.currentEnvObject = this.allEvn[this.currentEnv];
        this.runUpdate();
      }
    }
  }

  public getCurrentConfig() {
    return this.currentEnvObject;
  }

  public getCurrentEnv() {
    return this.currentEnv;
  }

  private runUpdate() {
    let confirm = this.alertCtrl.create({
      title: 'Thay đổi môi trường',
      message: 'Bạn có muốn chuyển sang môi trường: ' + this.currentEnv,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (this.canRunUpdate()) {
              this.switchChannel();
              this.checkForUpdate();
            }
          }
        },
        {
          text: 'Cancel'
        }
      ]
    });
    confirm.present();
  }

  private switchChannel(){
    this.deploy.channel = this.currentEnvObject['channel'];
  }

}
