import { Component } from '@angular/core';


@Component({
  selector: 'bottle-form',
  template: `
      <ion-list radio-group [(ngModel)]="nippleSize">
        <ion-list-header no-lines>
          Nipple Size (0-4)
        </ion-list-header>
        
        <ion-row text-center>
          <ion-col>
            <ion-label>Preemie</ion-label>
            <ion-radio value="0"></ion-radio>
          </ion-col>

          <ion-col>
            <ion-label>1</ion-label>
            <ion-radio value="1"></ion-radio>
          </ion-col>

          <ion-col>
            <ion-label>2</ion-label>
            <ion-radio value="2"></ion-radio>
          </ion-col>

          <ion-col>
            <ion-label>3</ion-label>
            <ion-radio value="3"></ion-radio>
          </ion-col>

          <ion-col>
            <ion-label>4</ion-label>
            <ion-radio value="4"></ion-radio>
          </ion-col>
        </ion-row>
      </ion-list>

      <ion-list-header no-lines>
        Ounces Eaten: {{ ouncesEaten }} ounces
      </ion-list-header>
      <ion-range
        [(ngModel)]="ouncesEaten"
        min="0" 
        max="16" 
        step="1" 
        snaps="true" 
        color="secondary">
      </ion-range>

      <div class="eat-submit">
        <button ion-button large>Log Baby's Feeding</button>
      </div>
  `
})
export class BottleFormComponent {

  text: string;

  constructor() {
    console.log('Hello BottleFormComponent Component');
    this.text = 'Bottle Form Component';
  }

}
