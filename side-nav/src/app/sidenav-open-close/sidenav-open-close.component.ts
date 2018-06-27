import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-open-close',
  templateUrl: './sidenav-open-close.component.html',
  styleUrls: ['./sidenav-open-close.component.css']
})
export class SidenavOpenCloseComponent implements OnInit {
 
 	events: string[] = [];
	opened: boolean;

  constructor() { }

  ngOnInit() {
  }

}
