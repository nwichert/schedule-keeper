import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { EatPage } from '../../pages/eat/eat';

import { BottleDetails } from '../../models/bottle-details/bottle-details.model';
import { BottleFormProvider } from '../../providers/bottle-form/bottle-form'; 


@Component({
  selector: 'bottle-form',
  template: `
      <ion-list radio-group [(ngModel)]="bottleDetail.nippleSize">
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
        Ounces Eaten: {{ bottleDetail.ouncesEaten }} ounces
      </ion-list-header>
      <ion-range
        [(ngModel)]="bottleDetail.ouncesEaten"
        min="0" 
        max="16" 
        step="1" 
        snaps="true" 
        color="secondary">
      </ion-range>

      <div class="eat-submit">
        <button ion-button large (click)="addBottleDetail(bottleDetail)">Log Baby's Feeding</button>
      </div>
  `
})
export class BottleFormComponent {

  bottleDetail: BottleDetails = {
    nippleSize: undefined,
    ouncesEaten: 0
  };
  
  constructor(
    public navCtrl: NavController,
    public afDb: AngularFireDatabase, 
    private bottlefeeding: BottleFormProvider,
    ) {}

  addBottleDetail(bottleDetail: BottleDetails){
    this.bottlefeeding.addBottleDetail(bottleDetail).then(ref => {
      this.navCtrl.push(EatPage, { key: ref.key })
    })
  }

}
