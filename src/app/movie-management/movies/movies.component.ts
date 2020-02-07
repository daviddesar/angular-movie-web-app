import { Component, OnInit } from '@angular/core';
import { MovieService, IMovie } from 'src/app/services/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  // dependency injection
  // đưa
  constructor(private _movieService: MovieService) { 
  }
  movieList: IMovie[];
  movieStatus: boolean;
  ngOnInit() {
    // lấy movieList từ service và gán vào biến local
    this.movieList = this._movieService.movieList
    // theo dõi emitter để nhận thông báo mỗi lần movieList có sự thay đổi
    this._movieService.movieListEmitter.subscribe((newMovieList) => {
      this.movieList = newMovieList
    })
    this.movieStatus = this._movieService.movieStatus
    this._movieService.movieStatusEmitter.subscribe((newMovieStatus) => {
      this.movieStatus = newMovieStatus
    })
  }

}
