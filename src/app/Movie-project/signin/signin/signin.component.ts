import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserGateway } from "src/app/gateways/user.gateway";
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  constructor(private _userGateway: UserGateway, private _userService: UserService, private _router: Router ) {}

  ngOnInit() {}
  signinHandler(form: NgForm) {
    const signinUser = {
      taiKhoan: form.value.taiKhoan,
      matKhau: form.value.matKhau
    };
    this._userGateway.signin(signinUser).subscribe(
      (res) => {
        localStorage.setItem('credentials', JSON.stringify(res));
        this._userService.setCredential(res)
        this._router.navigate(['/'])
      },
      (err) => {console.log(err.error)}
    );
  }
}
