import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';
import { MovieComponent } from './movie/movie.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomeIndexComponent, MovieComponent],
  imports: [
    CommonModule, HomeRoutingModule, RouterModule
  ],
  exports: [HomeIndexComponent, MovieComponent]
})
export class HomeModule { }
