import { Component } from '@angular/core';


@Component({
  selector: 'mother-form',
  template: `
    <div>
      {{text}}
    </div>
  `
})
export class MotherFormComponent {

  text: string;

  constructor() {
    console.log('Hello MotherFormComponent Component');
    this.text = 'Mother Form Component';
  }

}
