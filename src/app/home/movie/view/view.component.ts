import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class MovieViewComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
    ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          let id = params["id"];
          this.movieService.getMovie(id).subscribe(res =>{
            this.movie = res
          })
        }
      );
    }
  }
