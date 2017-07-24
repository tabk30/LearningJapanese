import { Injectable } from '@angular/core';
import { Deploy } from "@ionic/cloud-angular";
import { LoadingController, ToastController } from "ionic-angular";
import { Platform } from 'ionic-angular';

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
    private platform: Platform,
  ) {
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

  public runUpdate(channel:string) {
    this.deploy.channel = channel;
    if (this.canRunUpdate()) {
      this.checkForUpdate();
    }
  }

  public getChannel():string{
    return this.deploy.channel;
  }

}
