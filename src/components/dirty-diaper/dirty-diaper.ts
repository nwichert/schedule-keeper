import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { OrderByDateCreatedPipe } from '../../pipes/order-by-date-created/order-by-date-created';

import { JournalPage } from '../../pages/journal/journal';

@Component({
  selector: 'dirty-diaper',
  template: `
      <ion-list-header no-lines>
        Dirty Diaper Details
      </ion-list-header>
      <ion-range
        [(ngModel)]="bottleDetail.ouncesEaten"
        min="0" 
        max="10" 
        step="1" 
        snaps="true" 
        color="secondary">
      </ion-range>

      <div class="diaper-submit">
        <button ion-button large (click)="addDirtyDiaperDetail(bottleDetail)">Log Baby's Feeding</button>
      </div>
  `
})
export class DirtyDiaperComponent {

}
