import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EatJournalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EatJournalProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EatJournalProvider Provider');
  }

}
