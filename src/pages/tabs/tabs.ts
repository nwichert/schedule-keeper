import { Component } from '@angular/core';

import { DiaperPage } from '../diaper/diaper';
import { SleepPage } from '../sleep/sleep';
import { EatPage } from '../eat/eat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EatPage;
  tab2Root = SleepPage;
  tab3Root = DiaperPage;

  constructor() {

  }
}
