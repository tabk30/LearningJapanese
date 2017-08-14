import { Component, Input } from '@angular/core';
import { QuestionInterface } from '../../providers/component-dynamic/QuestionInterface';

/**
 * Generated class for the VocaQ1Component component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'voca-q1',
  templateUrl: 'voca-q1.html'
})
export class VocaQ1Component implements QuestionInterface {
  @Input() data: Object;

  text: string;

  constructor() {
    console.log('Hello VocaQ1Component Component');
    this.text = 'Hello World';
  }
}
