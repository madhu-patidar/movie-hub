import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { map } from 'rxjs/operators';
import { GET_ALL_USERS_API_URL, GET_USER_BY_ID_API_URL } from '../constants/api-endpoints';
import { IMovie } from './movie/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpService
  ) { }

  getAllMovies(paginator) : Observable<IMovie[]>{
    let url = `${GET_ALL_USERS_API_URL}`
   return this.http.get(url).pipe(map(res => {return res }))
  }

  getMovie(id): Observable<IMovie>{
    let url = `${GET_USER_BY_ID_API_URL}/${id}`
   return this.http.get(url).pipe(map(res => {return res }))
  }
}
