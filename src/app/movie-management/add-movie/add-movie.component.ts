import { Component, OnInit } from '@angular/core';
import { MovieService, IMovie } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
  }
  addMovieHandler(
    tenPhim: string,
    maPhim: string,
    moTa: string,
    danhGia: string,
    hinhAnh: string
  ): void {
    const newMovie = {
      maPhim,
      tenPhim,
      moTa,
      danhGia,
      hinhAnh,
    }
    console.log(newMovie)
    this._movieService.addMovie(newMovie)
  }
  deleteMovieHandler(): void {
    this._movieService.deleteMovie('1')
  }
  changeStatusHandler(): void {
    this._movieService.changeStatus()
  }
}
