import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-data-binding',
  templateUrl: './bai-tap-data-binding.component.html',
  styleUrls: ['./bai-tap-data-binding.component.scss']
})
export class BaiTapDataBindingComponent implements OnInit {

  constructor() { }
  email: string;
  fullnameInput: string;
  ngOnInit() {
  }
  fullnameChangeHandler(fullname: string):void {
    this.fullnameInput = fullname
  }
}
