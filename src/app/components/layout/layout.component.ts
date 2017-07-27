import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles:[`
  md-sidenav-container {
    background: rgba(0, 0, 0, 0.03);
}

*, /deep/ * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
  `]
})
export class LayoutComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }

}
