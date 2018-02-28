import { Component, OnInit, OnDestroy } from '@angular/core';
import { StopwatchProvider } from '../../providers/stopwatch/stopwatch';

@Component({
  selector: 'stopwatch-buttons',
  template: `
    <div class="button-wrap">
      <button
        id="play"
        ion-button round
        [disabled]="play" (click)="playTimer()">
          <ion-icon name="play"></ion-icon>
          Start
      </button>
      <button
        class="pause"
        ion-button icon-only round 
        [disabled]="!play" (click)="pauseTimer()">
          <ion-icon name="pause"></ion-icon>
      </button>
      <button 
        class="stop"
        ion-button icon-only round 
        (click)="stopTimer()">
          <ion-icon name="square"></ion-icon>
      </button>
    </div>
  `,
  styles: [`
      div {
          text-align: center;
      }
  `]
})

export class StopwatchButtonsComponent implements OnInit, OnDestroy {

  private playPauseStopUnsubscribe: any;
    private play: boolean;

    constructor(private StopwatchProvider: StopwatchProvider) {
    }

    ngOnInit() {
        this.playPauseStopUnsubscribe = this.StopwatchProvider.playPauseStop$.subscribe((res: any) => this.setPlay(res));       
    }

    ngOnDestroy() {
        this.playPauseStopUnsubscribe.unsubscribe();
    }

    private setPlay(res: any) {
        (res.play) ? this.play = true : this.play = false;
    }

    playTimer() {
        this.StopwatchProvider.playTimer();
    }

    pauseTimer() {
        this.StopwatchProvider.pauseTimer();
    }

    stopTimer() {
        this.StopwatchProvider.stopTimer();
    }

}