import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { Observable } from 'rxjs/Observable';

import { BottleFormProvider } from '../../providers/bottle-form/bottle-form';
import { BottleDetails } from '../../models/bottle-details/bottle-details.model';

@Component({
  selector: 'page-eat',
  templateUrl: 'eat.html',
})

export class EatPage {

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