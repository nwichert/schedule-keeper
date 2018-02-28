import { Component } from '@angular/core';

/**
 * Generated class for the WetDiaperComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wet-diaper',
  templateUrl: 'wet-diaper.html'
})
export class WetDiaperComponent {

  text: string;

  constructor() {
    console.log('Hello WetDiaperComponent Component');
    this.text = 'Hello World';
  }

}
