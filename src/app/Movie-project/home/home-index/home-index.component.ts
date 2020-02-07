import { Component, OnInit } from '@angular/core';

import { MovieService, IMovie } from 'src/app/services/movie.service';
import { MovieGateway } from 'src/app/gateways/movie.gateway';
@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit {

  constructor(private _movieService: MovieService, private _movieGateway: MovieGateway) { }
  movieList: IMovie[];
  ngOnInit() {
    this.movieList = this._movieService.movieList
    // subscribe thay đổi
    this._movieService.movieListEmitter.subscribe((newMovieList: IMovie[]) => {
      // cập nhật lại movieList
      this.movieList = newMovieList
    })
    this._movieGateway.fetchMovieList().subscribe(
      (res: IMovie[]) => {
        this._movieService.setMovieList(res)
      }, 
      (err) => {
        console.log(err)
      })
  }

}
