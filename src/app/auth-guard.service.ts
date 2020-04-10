import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router } from '@angular/router';
import { AccountService } from './auth/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private auth: AccountService,
    private router: Router
    ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.auth.isUserAuthenticated){
      this.router.navigate(['/login'])
    }else  return true;
}
}
