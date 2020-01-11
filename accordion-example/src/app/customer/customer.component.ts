import { Component, OnInit, Input } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  viewProviders: [MatExpansionPanel]
})
export class CustomerComponent implements OnInit {

  @Input() name: string;

  constructor() { }


  ngOnInit() {
    console.log("checking");
    console.log(name);
  }

}
