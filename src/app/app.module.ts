import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppSetting } from '../providers/config/app-setting/app-setting';
import { AppUpdateProvider } from '../providers/app-update/app-update';
import { FileHandlProvider } from '../providers/file-handl/file-handl';
import { HttpProvider } from '../providers/http/http';
import { UpdateComponent } from '../components/update/update';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '0581f9bf'
  }
};

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    AboutPage,
    HomePage,
    TabsPage,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    AboutPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppSetting,
    AppUpdateProvider,
    FileHandlProvider,
    HttpProvider
  ]
})
export class AppModule {}
