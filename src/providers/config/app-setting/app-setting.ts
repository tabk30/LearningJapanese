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
    this.initConfig();
  }

  public getConfig(key: string) {
    for (let temp in this.CONFIG) {
      if (temp == key) {
        return this.CONFIG[temp];
      }
    }
  }

  /*
    Enviroment manager
  */
  private currentEvn:Object;
  private allEvn:Object;
  private initConfig(){
    this.allEvn = this.getConfig('EVN');
    this.currentEvn = this.allEvn['production'];
  }

  public switchToEvn(enviroment:string){
    for(let temp in this.allEvn){
      let object = this.allEvn['temp'];
      if(object && object['channel'] == enviroment){
        this.currentEvn = object;
      }
    }
  }

  public getCurrentConfig():Object{
    return this.currentEvn;
  }

  public getAllEvn():Object{
    return this.getConfig('EVN');
  }

  public getBaseURL(){
    console.log("[AppSetting:getBaseURL]", this.currentEvn);
    return this.currentEvn['baseURL'];
  }
}
