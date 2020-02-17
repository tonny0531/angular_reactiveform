import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  options = [];

  constructor() { }

  ngOnInit() {
    this.InitOptions();
  }
  InitOptions() {
    for (let i = 1; i <= 5; i++) {
      if (i % 2 === 0){
        this.options.push({
          header: i,
          checked: true,
        });
      }
      else{
        this.options.push({
          header: i,
          checked: false,
        });
      }

    }
  }
}
