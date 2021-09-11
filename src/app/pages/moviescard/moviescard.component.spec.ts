import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviescardComponent } from './moviescard.component';

describe('MoviescardComponent', () => {
  let component: MoviescardComponent;
  let fixture: ComponentFixture<MoviescardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviescardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviescardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
