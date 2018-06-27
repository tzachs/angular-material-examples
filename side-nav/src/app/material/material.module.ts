import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule}  from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  imports: [
    CommonModule,
		MatButtonModule,
		MatSidenavModule,
		MatCheckboxModule,
		MatIconModule
  ],
	exports: [
		MatButtonModule,
		MatSidenavModule,
		MatCheckboxModule,
		MatIconModule
	],
  declarations: []
})
export class MaterialModule { }
