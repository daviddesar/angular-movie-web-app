import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';

const HomeRouting: Routes = [
  {path: '', component: HomeIndexComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(HomeRouting)
  ]
})
export class HomeRoutingModule { }
