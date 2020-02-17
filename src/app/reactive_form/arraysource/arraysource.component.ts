import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-arraysource',
  templateUrl: './arraysource.component.html',
  styleUrls: ['./arraysource.component.css']
})
export class ArraysourceComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.InitFormGroup();
  }

  InitFormGroup() {
    this.form = new FormGroup({
      Class: new FormControl('XXX教室'),
      TeacherName: new FormControl('XXX老師'),
      Students: new FormArray([
        new FormGroup({
          Name: new FormControl('Jeff'),
          Age: new FormControl(24),
          Height: new FormControl(173),
          Weight: new FormControl(80),
          Sex: new FormControl('男'),
        }),
        new FormGroup({
          Name: new FormControl('Abel'),
          Age: new FormControl(26),
          Height: new FormControl(170),
          Weight: new FormControl(60),
          Sex: new FormControl('男'),
        }),
      ]),
    });
  }
  changeStatus($event: any) {

  }

}
