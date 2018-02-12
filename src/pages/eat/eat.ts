import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-eat',
  templateUrl: 'eat.html',
})
export class EatPage {

  public breastRightOrLeft;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selectBottle(){

  }

  public selectBreast = (breastSide) => {
    if (this.breastRightOrLeft === breastSide) return;
    this.breastRightOrLeft = breastSide;
  }

  selectLeftBreast(){

  }

  selectRightBreast(){

  }

  nippleSizeOne(){

  }

  nippleSizeTwo(){

  }

  nippleSizeThree(){

  }

  nippleSizeFour(){

  }

  nippleSizeFive(){

  }

  nippleSizeSix(){

  }

  eatLogSubmit(){

  }

}
