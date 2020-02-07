import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LoginGuard } from "./login.guard";

const Routes: Routes = [
  {
    path: "",
    loadChildren: "./Movie-project/home/home.module#HomeModule",
    canActivate: [LoginGuard]
  },
  {
    path: "detail/:id",
    loadChildren: "./Movie-project/detail/detail.module#MovieDetailModule"
  },
  {
    path: "signin",
    loadChildren: "./Movie-project/signin/signin.module#SigninModule"
  },
  {
    path: "signup",
    loadChildren: "./Movie-project/signup/signup.module#SignupModule"
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(Routes)]
})
export class AppRoutingModule {}
