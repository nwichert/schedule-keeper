import { Component } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent {

  text: string;

  public myDate;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.reset();
  }

  reset() {
    const obj = { hour: 0, minute: 0, second: 0, millisecond: 0 }
    this.myDate = this.mDate().set(obj).toISOString();
  }

  sleep(ms: number = 1000) {
    return new Promise(res => setTimeout(res, ms));
  }

  mDate(date?) {
    if (date)
      return moment(date).utc();
    return moment().utc();
  }

  canInterate(date) {
    const hour = this.mDate(date).get('hour')
    const minute = this.mDate(date).get('minute')
    const second = this.mDate(date).get('second')

    return hour || minute || second > 0;
  }

  async iterateTime() {
    const date = this.mDate(this.myDate);

    while (this.canInterate(date)) {
      await this.sleep();

      date.set('second', date.get('second') - 1)
      this.myDate = this.mDate(date).toISOString();
    }
  }

  startStopwatch(): void {
    this.iterateTime();

  }
}
