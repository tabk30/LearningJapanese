import { Component } from '@angular/core';

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
export class VocaQ1Component {

  text: string;

  constructor() {
    console.log('Hello VocaQ1Component Component');
    this.text = 'Hello World';
  }
}
