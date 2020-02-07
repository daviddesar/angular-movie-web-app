import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  constructor() { }
  @Input() movieItem: IMovie
  ngOnInit() {
  }

}
