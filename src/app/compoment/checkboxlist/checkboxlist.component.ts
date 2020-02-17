import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxlist',
  templateUrl: './checkboxlist.component.html',
  styleUrls: ['./checkboxlist.component.css']
})
export class CheckboxlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.Init();
  }


  taskTypeAreas: {
    name: string;
    checked: boolean;
  }[] = [
      {
        name: 'Area 1',
        checked: false
      },
      {
        name: 'Area 2',
        checked: false
      },
      {
        name: 'Area 3',
        checked: true
      },
    ];
  selectedOptions: string[];
  Init() {
    this.selectedOptions = this.taskTypeAreas
      .filter(item => item.checked)
      .map(item => item.name);
  }

  onAreaListControlChanged(list) {
    // determine selected options
    this.selectedOptions = list.selectedOptions.selected.map(item => item.value);
  }
}
