import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { SvgIconRegistryService } from 'angular-svg-icon';


@Component({
  selector: 'page-eat',
  templateUrl: 'eat.html',
})

export class EatPage {

  // formula = {
  //   ouncesEaten: undefined
  // }

  // bottle = {
  //   nippleSize: [
  //     {size: 1, selected: false, id: 1},
  //     {size: 2, selected: false, id: 2},
  //     {size: 3, selected: false, id: 3},
  //     {size: 4, selected: false, id: 4},
  //     {size: 5, selected: false, id: 5},
  //     {size: 6, selected: false, id: 6}
  //   ]
  // }

  // breast = {
  //   breastSide: [
  //     {breastSideLeft: 'Left', selected: false, id: 1},
  //     {breastSideRight: 'Right', selected: false, id: 2}
  //   ]
  // }

  // myForm: FormGroup;

  // constructor(
  //   public navCtrl: NavController, 
  //   public navParams: NavParams,
  //   private fb: FormBuilder) {
  //   }

  // ngOnInit() {
  //   this.myForm = this.fb.group({
  //     nippleSize: this.fb.array([])
  //   });
  // }

  // onChange(ouncesEaten: number, isChecked: boolean) {
  //   const nippleSizeFormArray = <FormArray>this.myForm.controls.nippleSize;

  //   if(isChecked){
  //     nippleSizeFormArray.push(new FormControl(ouncesEaten));
  //   } else {
  //     let index = nippleSizeFormArray.controls.findIndex(x => x.value == ouncesEaten)
  //     nippleSizeFormArray.removeAt(index);
  //   }
  // }


}