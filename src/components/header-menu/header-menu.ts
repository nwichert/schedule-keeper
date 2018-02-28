import { Component } from '@angular/core';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderMenuComponent Component');
    this.text = 'Hello World';
  }

}
