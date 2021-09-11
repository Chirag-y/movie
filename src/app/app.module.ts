import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
