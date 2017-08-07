import { Component } from '@angular/core';

/**
 * Generated class for the TimeCountComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'time-count',
  templateUrl: 'time-count.html'
})
export class TimeCountComponent {

  text: string;

  constructor() {
    console.log('Hello TimeCountComponent Component');
    this.text = 'Hello World';
  }

}
