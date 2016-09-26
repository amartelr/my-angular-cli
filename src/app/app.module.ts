import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { HighlightDirective, HighlightDirective2 } from './directives/helper.directives';



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
    BrowserModule,
    RouterModule.forRoot([
        {path: '',component: HomeComponent} ,
        {path: 'about',component: AboutComponent} ,
    ]) 
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule { }
