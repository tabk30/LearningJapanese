import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { HttpModule } from '@angular/http';
import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { ExamPage } from '../pages/exam/exam';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppSetting } from '../providers/config/app-setting/app-setting';
import { AppUpdateProvider } from '../providers/app-update/app-update';
import { FileDataHandleProvider } from '../providers/file-data-handle/file-data-handle';
import { HttpProvider } from '../providers/http/http';
import { UpdateComponent } from '../components/update/update';
import { ExamApiProvider } from '../providers/api/exam-api/exam-api';
import { ExamProvider } from '../providers/exam/exam';
import { TimeCountComponent } from '../components/time-count/time-count';
import { VocaStartComponent } from '../components/voca-start/voca-start';
import {QuestionImplementComponent} from '../providers/component-dynamic/question-implement';
import {QuestionDirective} from '../providers/component-dynamic/question-host';
import { VocaQ1Component } from '../components/voca-q1/voca-q1';
import { VocaQ1ContainerComponent } from '../components/voca-q1-container/voca-q1-container';
import { UpdateAutoComponent } from '../components/update-auto/update-auto';
import { TimeCounterComponent } from '../components/time-counter/time-counter';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '0581f9bf'
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    ExamPage,
    UpdateComponent,
    TimeCountComponent,
    QuestionImplementComponent,
    VocaStartComponent,
    QuestionDirective,
    VocaQ1Component,
    VocaQ1ContainerComponent,
    UpdateAutoComponent,
    TimeCounterComponent
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
    AboutPage,
    HomePage,
    ExamPage,
    UpdateComponent,
    QuestionImplementComponent,
    VocaStartComponent,
    VocaQ1Component,
    VocaQ1ContainerComponent,
    TimeCounterComponent
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
    ExamApiProvider,
    ExamProvider
  ]
})
export class AppModule { }
