import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { SigninRoutingModule } from './signin-routing.module';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule, FormsModule, SigninRoutingModule
  ],
  exports: [SigninComponent]
})
export class SigninModule { }
