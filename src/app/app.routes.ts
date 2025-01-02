import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: '',loadChildren:()=>import ("./home/home.module").then(m=>m.HomeModule)},
    {path:'about',loadChildren:()=>import("./about/about.module").then(m=>m.AboutModule)}
        
    
];
