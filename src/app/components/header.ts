// header.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-slate-900 shadow-lg border-b border-emerald-500/20">
      <nav class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-white">A</div>
          <span class="text-xl font-bold text-white tracking-tight">Angular<span class="text-emerald-400">First</span></span>
        </div>

        <div class="flex gap-1">
          <a routerLink="/" 
             routerLinkActive="bg-emerald-500/10 text-emerald-400" 
             [routerLinkActiveOptions]="{exact: true}"
             class="px-4 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white transition-all">
             Home
          </a>
          
          <a routerLink="/about" 
             routerLinkActive="bg-emerald-500/10 text-emerald-400"
             class="px-4 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white transition-all">
             About
          </a>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {}
