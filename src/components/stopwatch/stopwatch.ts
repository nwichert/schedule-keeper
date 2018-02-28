import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { StopwatchProvider } from '../../providers/stopwatch/stopwatch';

@Component({
  selector: 'stopwatch',
  template: `
    <div class="stopwatch">
      <p id="minutes">{{(minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay : '00'}}</p>
      <span class="divider">:</span>
      <p id="seconds">{{(secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00'}}</p>
    </div>
  `,
  styles: ['./stopwatch.scss']
})

// <ion-col class="hours">{{hoursDisplay ? hoursDisplay : '00'}} :</ion-col>

export class StopwatchComponent implements OnInit {
    private playPauseStopUnsubscribe: any;

    start = 0;
    ticks = 0;
    
    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;

    sub: Subscription;

    constructor(private StopwatchProvider: StopwatchProvider) {

    }

    ngOnInit() {
        this.playPauseStopUnsubscribe = this.StopwatchProvider.playPauseStop$.subscribe((res: any) => this.playPauseStop(res));
    }

    ngOnDestroy() {
        this.playPauseStopUnsubscribe.unsubscribe();;
    }

    private playPauseStop(res: any) {
        if(res.play) {
            this.startTimer();
        } else if(res.pause) {
            this.pauseTimer();
        } else if (res.stop) {
            this.stopTimer();
        }
    }
    
    private startTimer() {

        let timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.ticks = this.start + t;
                
                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );
    }

    private pauseTimer() {
        this.start = ++this.ticks;
        if (this.sub) this.sub.unsubscribe();
    }

    private stopTimer() {
        this.start = 0;
        this.ticks = 0;

        this.minutesDisplay = 0;
        this.hoursDisplay = 0;
        this.secondsDisplay = 0;
        if (this.sub) this.sub.unsubscribe();
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
         return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) { 
        return digit <= 9 ? '0' + digit : digit;
    }
}
