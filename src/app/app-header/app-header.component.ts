import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  numbers: number[];

  constructor() { }

  ngOnInit() {
    this.numbers = [];
  }
  clicked() {
    this.numbers.push(Math.floor(Math.random() * 100));
  }
}
