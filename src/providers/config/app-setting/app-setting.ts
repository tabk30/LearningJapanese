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
    this.initEnvSonfig();
  }

  public getConfig(key: string) {
    for (let temp in this.CONFIG) {
      if (temp == key) {
        return this.CONFIG[temp];
      }
    }
  }

  private currentEnv: string = "production";
  private currentEnvObject: Object = {};
  private initEnvSonfig() {
    this.currentEnvObject = this.CONFIG['EVN'][this.currentEnv];
  }

  public getAllEnv() {
    return this.CONFIG['EVN'];
  }

  public switchToEnv(env: string) {
    for (let key in this.CONFIG['EVN']) {
      if (key == env) {
        this.currentEnv = key;
        this.currentEnvObject = this.CONFIG['EVN'][this.currentEnv];
      }
    }
  }

  public getCurrentConfig() {
    return this.currentEnvObject;
  }

}
