import { Routes } from '@angular/router';
import { About } from './pages/about/about';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: About }
  ];
  