import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  eval: any;

  constructor() { }

  ngOnInit() {
  }

  onClickChangeClass() {
    this.eval = !this.eval;
  }
}
