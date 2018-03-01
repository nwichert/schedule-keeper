import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { BottleFormProvider } from '../../providers/bottle-form/bottle-form';
import { BottleDetails } from '../../models/bottle-details/bottle-details.model';

@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html',
})
export class JournalPage {

  bottleDetail$: Observable<BottleDetails[]>;

  constructor(
    public navCtrl: NavController,
    private bottle: BottleFormProvider
  ) {
    this.bottleDetail$ = this.bottle
      .getBottleDetails() // returns a DB LIST
      .snapshotChanges()  // acces to Key and Value pairs
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        });
  }
}
