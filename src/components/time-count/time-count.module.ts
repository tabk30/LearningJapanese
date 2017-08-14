import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TimeCountComponent } from './time-count';

@NgModule({
  declarations: [
    TimeCountComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    TimeCountComponent
  ]
})
export class TimeCountComponentModule {}
