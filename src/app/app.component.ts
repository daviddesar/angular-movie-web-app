import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor( private _userService: UserService) {}
  ngOnInit() {
    const credentialsString = localStorage.getItem('credentials');
    if (credentialsString) {
      this._userService.setCredential(JSON.parse(credentialsString))
    }
  }

}
