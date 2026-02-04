import { Component } from '@angular/core';

    
@Component({
  selector: 'app-header',
  standalone: true,
  template: `
  <h2 class="text-green-600">Header</h2>
  <nav class="navbar flex gap-10">
    <a class="nav-link  text-amber-500" href="/">Home</a>
    <a class="nav-link  text-blue-400" href="/">About</a>
    <a class="nav-link  text-fuchsia-600" href="/">Contact</a>
  </nav>
`
  
})
export class HeaderComponent {}