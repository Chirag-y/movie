import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from '../component/component.module';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MoviescardComponent } from './moviescard/moviescard.component';
import { NgxStarsModule } from 'ngx-stars';
import { FormsModule } from '@angular/forms';
import { PeopleComponent } from './people/people.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    MoviescardComponent,
    PeopleComponent

  ],
  imports: [
    CommonModule,
    ComponentModule,
    PagesRoutingModule,
    NgxStarsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
