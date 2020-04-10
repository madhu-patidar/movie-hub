import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  private userLogin = new Subject<any>();
 $logedinAnnounce = this.userLogin.asObservable();

  login(credentials){
    return this.http.get(`http://my-json-server.typicode.com/madhu-patidar/mockjson/users?username=${credentials.username}`).pipe(map(res =>{
    this.userLogin.next(res)  
    return res
    
    }))
  }

  createSession(user){
    localStorage.setItem("user", JSON.stringify(user))
  }

  destorySession(){
    localStorage.clear();
    this.userLogin.next(null);
    this.router.navigate(['/login']);
  }

  get isUserAuthenticated(){
    return !!localStorage.getItem('user')
  }

  get currentUser(){
    let user = localStorage.getItem('user')
    if(user) return JSON.parse(user);
    else user;
  }
}
