import { Component, Input } from '@angular/core';
import { QuestionInterface } from '../../providers/component-dynamic/QuestionInterface';
/**
 * Generated class for the VocaStartComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'voca-start',
  templateUrl: 'voca-start.html'
})
export class VocaStartComponent implements QuestionInterface{
  @Input() data: Object;

  constructor() {
    console.log('Hello VocaStartComponent Component');
  }

}
