import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/auth/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: any;

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.accountService.$logedinAnnounce.subscribe(user =>{
      if(user) this.user = user[0];
      else this.user = null;
    })

    this.user = this.accountService.currentUser;
  }

  goToHome(){
    this.router.navigate(['/'])
  }
  logout(){
    this.accountService.destorySession()
  }



}
