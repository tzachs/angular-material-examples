import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
		MatExpansionModule
  ],
	exports: [
		MatExpansionModule
	],
  declarations: []
})
export class MaterialModule { }
