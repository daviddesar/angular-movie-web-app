import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {

  constructor() { }
  isShowCybersoft = false;
  month = 3;
  monthArr: string[] = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4']
  ngOnInit() {
  }
  changeMonthHandler(event):void {
    this.month = event.target.value
  }
}
