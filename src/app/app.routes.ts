// app.routes.ts
import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { HeaderComponent } from './components/header';


export const routes: Routes = [

    { path: '', component: HeaderComponent },

    
   
    { path: 'about', component: About },

  
    { path: '**', redirectTo: '' } 
];