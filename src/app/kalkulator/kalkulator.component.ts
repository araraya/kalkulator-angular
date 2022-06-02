import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.css']
})
export class KalkulatorComponent implements OnInit {

  // bikin reactive from untuk bisa validator batasi input minimal 1 - 4 

  profileForm = new FormGroup({
    num1: new FormControl(0, [Validators.min(1), Validators.max(4)]),
    num2: new FormControl(0),
  });


  // bikin variabel hasil
  public num3: number = 0;

  // bikin function function untuk tombol kalkulator

  Add() {
    this.num3 = this.profileForm.controls['num1'].value + this.profileForm.controls['num2'].value;


  }

  Sub() {
    this.num3 = this.profileForm.controls['num1'].value - this.profileForm.controls['num2'].value;
  }
  Multiply() {
    this.num3 = this.profileForm.controls['num1'].value * this.profileForm.controls['num2'].value;
  }
  Divide() {
    this.num3 = this.profileForm.controls['num1'].value / this.profileForm.controls['num2'].value;
  }


  // log(x: any) {
  //   console.log(x);
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
