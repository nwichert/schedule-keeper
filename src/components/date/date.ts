import { Component } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: 'date.html'
})
export class DateComponent {
  today = Date.now();
}
