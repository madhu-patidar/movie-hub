import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { ERROR_MESSAGES } from 'src/app/constants/error-messages.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide:boolean = true
  loginForm: FormGroup;
  formErrors: any = {};
  submitted: boolean;
  invalidUser: boolean;

  constructor(
    private router: Router,
    private accountService: AccountService
  ) { 
    this.formErrors =  ERROR_MESSAGES;
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  login(){
    this.submitted = true;
    this.invalidUser = false;
    if(this.loginForm.invalid) return
    this.accountService.login(
      this.loginForm.value
    ).subscribe(res =>{
      if(res[0]){
        this.accountService.createSession(res[0])
        this.router.navigate(['/movies'])
      }else{
        this.invalidUser = true;
      }
     
    })
  }

}
