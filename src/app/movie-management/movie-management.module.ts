import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { AddMovieComponent } from './add-movie/add-movie.component';



@NgModule({
  declarations: [MoviesComponent, MovieItemComponent, AddMovieComponent],
  imports: [
    CommonModule
  ],
  exports: [MoviesComponent, AddMovieComponent]
})
export class MovieManagementModule { }
