import { Component, Input } from '@angular/core';
export class SubQuestionTextModel {
  number: Number;
  title: string;
  content:string;
  answer:Array<String>;
  constructor(number:Number, title:string, content:string, answer:Array<string>){
    this.number = number;
    this.title = title;
    this.content = content;
    this.answer = answer;
  }
}
/**
 * Generated class for the SubQuestionTextComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'sub-question-text',
  templateUrl: 'sub-question-text.html'
})
export class SubQuestionTextComponent {
  @Input() set data(value:SubQuestionTextModel){
    this.onInitData(value); 
  }

  content:SubQuestionTextModel;

  constructor() {
    console.log('Hello SubQuestionTextComponent Component');
  }

  private onInitData(value:SubQuestionTextModel):void{
    console.log('[SubQuestionTextComponent] Component', value.content);
    this.content = value;
  }

}
