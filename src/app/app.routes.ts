// app.routes.ts
import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { HeaderComponent } from './components/header'; // Yangi Home komponentini yarating yoki import qiling


export const routes: Routes = [
    // 1. Asosiy sahifa (Loyiha ochilganda shu ko'rinadi)
    { path: '', component: HeaderComponent },

    
   
    { path: 'about', component: About },

  
    { path: '**', redirectTo: '' } 
];