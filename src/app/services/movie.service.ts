import { Injectable, Output, EventEmitter } from '@angular/core';

export interface IMovie {
  tenPhim: string,
  maPhim: string,
  moTa: string,
  danhGia: string,
  hinhAnh: string
}
export interface IMovieDetail extends IMovie {
  lichChieu: any[]
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // quản lý dữ liệu movie
  
  movieDetail: IMovieDetail
  @Output() movieDetailEmitter = new EventEmitter()

  movieList: IMovie[] = []
  @Output() movieListEmitter = new EventEmitter()
  constructor() { }
  setMovieDetail(movieDetail: IMovieDetail) {
    this.movieDetail = movieDetail;
    this.movieDetailEmitter.emit(this.movieDetail)
  }
  setMovieList(movies: IMovie[]): void {
    // set lại mảng trên store sau khi gọi api
    this.movieList = movies
    // emit cho cpn biết về sự thay đổi
    this.movieListEmitter.emit(this.movieList)
  }
  addMovie(movie: IMovie): void {
    this.movieList.push(movie);
    this.movieListEmitter.emit(this.movieList)
  }
  deleteMovie(maPhim: string): void {
    const index = this.movieList.findIndex(item => item.maPhim === maPhim)
    if (index !== -1) {
      this.movieList.splice(index, 1)
    }
  }
  changeStatus(): void {
    this.movieStatus = true
    this.movieStatusEmitter.emit(this.movieStatus)
  }







  movieStatus = false;
  @Output() movieStatusEmitter = new EventEmitter()
}
