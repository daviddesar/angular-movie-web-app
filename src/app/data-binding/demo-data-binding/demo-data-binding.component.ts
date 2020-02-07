import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-data-binding',
  templateUrl: './demo-data-binding.component.html',
  styleUrls: ['./demo-data-binding.component.scss']
})
export class DemoDataBindingComponent implements OnInit {
  name: string = "quan"
  constructor() { }
  ngOnInit() {
  }
  phoneNumber: string;
  isDisable = true
  showMessage(): void {
    alert('Demo event binding')
  }
  email: string;
  changeEmailHandler(event):void {
    this.email = event.target.value;
    console.log(this.email)
  }
  // local ref
  showUsername(username: string): void {
    alert('username is: '+ username)
  }
}
