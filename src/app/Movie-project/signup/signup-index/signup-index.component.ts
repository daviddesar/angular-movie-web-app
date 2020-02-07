import { Component, OnInit } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { UserGateway } from "src/app/gateways/user.gateway";

@Component({
  selector: "app-signup-index",
  templateUrl: "./signup-index.component.html",
  styleUrls: ["./signup-index.component.scss"]
})
export class SignupIndexComponent implements OnInit {
  constructor(private _userGateway: UserGateway) {}

  ngOnInit() {}
  signupUserHandler(formSignup: NgForm) {
    const newUser = {
      ...formSignup.form.value,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang"
    };
    this._userGateway.signUp(newUser).subscribe(
      (res) => {console.log(res)},
      (err) => {console.log(err)}
    );
  }
}
