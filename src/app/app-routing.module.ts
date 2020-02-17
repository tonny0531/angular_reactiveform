import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayComponent } from './reactive_form/array/array.component';
import { ArraysourceComponent } from './reactive_form/arraysource/arraysource.component';
import { CheckboxlistComponent } from './compoment/checkboxlist/checkboxlist.component';


const routes: Routes = [{
  path: 'FormArray', children: [{
    path: 'Source', component: ArraysourceComponent
  },
  {
    path: 'End', component: ArrayComponent
  }]
}, {
  path: 'Checkbox', children: [{
    path: 'List', component: CheckboxlistComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
