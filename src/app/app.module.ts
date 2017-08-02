import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { HttpModule } from '@angular/http';
import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppSetting } from '../providers/config/app-setting/app-setting';
import { AppUpdateProvider } from '../providers/app-update/app-update';
import { FileDataHandleProvider } from '../providers/file-data-handle/file-data-handle';
import { HttpProvider } from '../providers/http/http';
import { UpdateComponent } from '../components/update/update';
import { ExamApiProvider } from '../providers/api/exam-api/exam-api';
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
    CloudModule.forRoot(cloudSettings),
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    AboutPage,
    HomePage,
    TabsPage,
    UpdateComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AppSetting,
    AppUpdateProvider,
    File,
    FileDataHandleProvider,
    HttpProvider,
    ExamApiProvider
  ]
})
export class AppModule { }
