import { Component } from '@angular/core';

// Public Component

@Component({
  selector: 'journal',
  templateUrl: 'journal.html'
})
export class JournalComponent {

  text: string;

  constructor() {
    console.log('Hello JournalComponent Component');
    this.text = 'Journal Component';
  }

}
