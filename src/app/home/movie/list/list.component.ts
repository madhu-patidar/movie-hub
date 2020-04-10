import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class MovieListComponent implements OnInit {
  paginator = {page: 1, limit: 4}
  displayedColumns: string[];
  dataSource: any;
  searchText
  constructor(
    private movieService: MovieService,
    private router: Router
    ) { }

  myControl = new FormControl();
  options: any[] ;
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    
      this.movieService.getAllMovies(this.paginator).subscribe(
        res => {
          this.displayedColumns = Object.keys(res[0])
          this. dataSource = res
          this.options = [
            "1 idiots",
            "2 idiots",
            "3 idiots",
        ]
          this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

          console.log(this.options)
        }
      )
  }

  private _filter(value: string): string[] {
    if(value.trim() == "") return this.options
    const filterValue = value.toLowerCase();
    this.options =  this.dataSource.filter(option => option.name.toLowerCase().includes(filterValue));
    return this.options.map(d => {return d.name})
  }

  optionSelected(event){
   let selectedMovie = this.dataSource.filter(option => option.name ===  event.option.value)[0];
    this.router.navigate([`movies/${selectedMovie.id}`])
  }

}
