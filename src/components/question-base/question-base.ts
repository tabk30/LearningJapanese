import { Component, Input, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { QuestionInterface } from '../../providers/component-dynamic/QuestionInterface';
import { SubQuestionTextModel } from '../sub-question-text/sub-question-text';
/**
 * Generated class for the QuestionBaseComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'question-base',
  templateUrl: 'question-base.html'
})
export class QuestionBaseComponent implements QuestionInterface {
  @Input()
  set data(value: Object) {
    // set the latest value for _data BehaviorSubject
    this.onParserData(value);
  };
  @ViewChild(Content) content: Content;

  questionTitle: string = '';
  subQuestionList: Array<SubQuestionTextModel> = new Array<SubQuestionTextModel>();

  constructor() {
    console.log("[QuestionBaseComponent:constructor]", this.data);
  }

  private onParserData(data): void {
    console.log("[QuestionBaseComponent:onParserData]", data.subQuestions);
    this.questionTitle = data['title'];
    for (var i = 0; i < data.subQuestions.length; i++) {
      let subQuestion = data.subQuestions[i];
      let newSQ: SubQuestionTextModel = new SubQuestionTextModel(i + 1, subQuestion.title, subQuestion.content, subQuestion.answer);
      this.subQuestionList.push(newSQ);
    }
    this.content.resize();
  }
}
