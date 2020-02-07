import { Component, OnInit } from '@angular/core';
import { MovieService, IMovieDetail } from 'src/app/services/movie.service';
import { MovieGateway } from 'src/app/gateways/movie.gateway';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-index',
  templateUrl: './detail-index.component.html',
  styleUrls: ['./detail-index.component.scss']
})
export class DetailIndexComponent implements OnInit {
  movieDetail: IMovieDetail
  constructor(private _movieService: MovieService, private _movieGateway: MovieGateway, private _activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    
    
    // get param from url
    this._activatedRoute.params.subscribe(params => {
      this._movieGateway.fetchMovieDetail(params.id).subscribe(
        (res:IMovieDetail) => {
          this._movieService.setMovieDetail(res)
        },
        (err) => {console.log(err)}
      )
    })
    this.movieDetail = this._movieService.movieDetail;
    this._movieService.movieDetailEmitter.subscribe((newMovieDetail: IMovieDetail) => {
      this.movieDetail = newMovieDetail
    })
  }

}
