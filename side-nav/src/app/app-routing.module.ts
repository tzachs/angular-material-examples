import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DrawerComponent } from './drawer/drawer.component';
import { SlideComponent } from './slide/slide.component';
import { SidenavOpenCloseComponent } from './sidenav-open-close/sidenav-open-close.component';

const routes: Routes = [
  { path: 'drawer', component: DrawerComponent },
  { path: 'slide', component: SlideComponent },
	{ path: 'sidenavopenclose', component: SidenavOpenCloseComponent }
];

@NgModule({
  exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
