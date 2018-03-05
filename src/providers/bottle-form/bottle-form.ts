import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { BottleDetails } from '../../models/bottle-details/bottle-details.model';


@Injectable()
export class BottleFormProvider {

  private bottleDetailsRef = this.db.list<BottleDetails>('bottle-form');

  constructor(private db: AngularFireDatabase) { }

  getBottleDetails() {
    return this.bottleDetailsRef;
  }

  addBottleDetail(bottleDetail: BottleDetails) {
    return this.bottleDetailsRef.push(bottleDetail)
  }

}
