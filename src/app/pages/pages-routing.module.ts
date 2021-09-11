import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "movie/:id",
    component: MovieComponent
  },
  {
    path: "people",
    component: PeopleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
