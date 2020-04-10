import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie/list/list.component';
import { MovieViewComponent } from './movie/view/view.component';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../shared/shared.module';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MovieListComponent, MovieViewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatAutocompleteModule,
    FormsModule,
    
  ]
})
export class HomeModule { }
