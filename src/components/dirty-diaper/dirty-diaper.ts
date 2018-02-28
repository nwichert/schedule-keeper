import { Component } from '@angular/core';

/**
 * Generated class for the DirtyDiaperComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dirty-diaper',
  templateUrl: 'dirty-diaper.html'
})
export class DirtyDiaperComponent {

  text: string;

  constructor() {
    console.log('Hello DirtyDiaperComponent Component');
    this.text = 'Hello World';
  }

}
