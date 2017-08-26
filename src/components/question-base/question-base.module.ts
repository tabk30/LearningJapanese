import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { QuestionBaseComponent } from './question-base';

@NgModule({
  declarations: [
    QuestionBaseComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    QuestionBaseComponent
  ]
})
export class QuestionBaseComponentModule {}
