import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { HighlightDirective, HighlightDirective2 } from './directives/helper.directives';


import { routing,  appRoutingProviders }  from './app.routing';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, 
    HomeComponent, AboutComponent, CarouselComponent, FooterComponent, HighlightDirective, HighlightDirective2
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [appRoutingProviders, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  schemas:     [CUSTOM_ELEMENTS_SCHEMA]  ,
  bootstrap: [AppComponent]
})

export class AppModule { }
