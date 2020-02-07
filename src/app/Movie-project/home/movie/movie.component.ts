import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor() { }
  @Input() movieItem: IMovie
  ngOnInit() {
  }

}
