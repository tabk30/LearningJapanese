import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import *  as AppConfig from './AppConfig'
/*
  Generated class for the AppSetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AppSetting {
  private CONFIG: Object;
  constructor(private platform: Platform) {
    console.log('[AppSetting:constructor] Provider');
    console.log('[AppSetting:constructor]', AppConfig.Config);
    this.CONFIG = AppConfig.Config;
  }

  public getConfig(key: string) {
    for (let temp in this.CONFIG) {
      if (temp == key) {
        return this.CONFIG[temp];
      }
    }
  }s
}
