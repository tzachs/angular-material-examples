import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CustomerComponent } from './customer/customer.component';
import { MatExpansionPanel } from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		MaterialModule
  ],
  providers: [MatExpansionPanel],
  bootstrap: [AppComponent]
})
export class AppModule { }
