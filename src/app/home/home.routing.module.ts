import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie/list/list.component';
import { MovieViewComponent } from './movie/view/view.component';
import { AuthGuardService } from '../auth-guard.service';



const routes: Routes = [
  { path: '',  canActivate: [AuthGuardService], component: MovieListComponent },
  { path: ':id' ,  canActivate: [AuthGuardService], component: MovieViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
