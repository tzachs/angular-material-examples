import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { DrawerComponent } from './drawer/drawer.component';
import { AppRoutingModule } from './/app-routing.module';
import { SlideComponent } from './slide/slide.component';
import { SidenavOpenCloseComponent } from './sidenav-open-close/sidenav-open-close.component';




@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    SlideComponent,
    SidenavOpenCloseComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		MaterialModule,
		AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
