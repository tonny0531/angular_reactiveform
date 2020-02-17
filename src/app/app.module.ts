import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayComponent } from './reactive_form/array/array.component';
import { ArraysourceComponent } from './reactive_form/arraysource/arraysource.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule, MatCheckboxModule } from '@angular/material';
import { CheckboxlistComponent } from './compoment/checkboxlist/checkboxlist.component';
import { CheckboxComponent } from './compoment/checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    ArraysourceComponent,
    CheckboxlistComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
