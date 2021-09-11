import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/pages/movies';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  movie!: Movie[];


  constructor() { }

  ngOnInit(): void {
  }

}
