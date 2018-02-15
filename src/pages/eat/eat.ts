import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SvgIconRegistryService } from 'angular-svg-icon';

interface bottleDetail {
  nippleSize: number
}

@Component({
  selector: 'page-eat',
  templateUrl: 'eat.html',
})

export class EatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}