import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { SvgIconRegistryService } from 'angular-svg-icon';

import { Eat } from '../../app/models/eat/eat.model';

@Component({
  selector: 'page-eat',
  templateUrl: 'eat.html',
})

export class EatPage {

  eat: Eat = {
    ouncesEaten: undefined,
    breastSideLeft: undefined,
    breastSideRight: undefined,
    nippleSizeOne: undefined,
    nippleSizeTwo: undefined,
    nippleSizeThree: undefined,
    nippleSizeFour: undefined,
    nippleSizeFive: undefined,
    nippleSizeSix: undefined,
    time: undefined
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}