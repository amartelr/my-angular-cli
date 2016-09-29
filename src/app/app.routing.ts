import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { WikiComponent } from './components/wiki/wiki.component';


const appRoutes: Routes = [
      {path: '',component: HomeComponent} ,
        {path: 'about',component: AboutComponent},
           {path: 'wiki',component: WikiComponent} 
 
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
