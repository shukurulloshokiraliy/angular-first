import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // NgFor uchun kerak

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <h2 class="text-2xl font-bold text-green-600 border-bottom">Todo List</h2>
      
      <div class="flex gap-2">
        <input 
          #todoInput
          type="text" 
          placeholder="Add Todo" 
          class="border-2 border-gray-200 p-2 rounded-lg flex-grow focus:outline-none focus:border-green-500"
          (keyup.enter)="addTodo(todoInput.value); todoInput.value = ''" 
        />
        <button 
          (click)="addTodo(todoInput.value); todoInput.value = ''"
          class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          Add
        </button>
      </div>

      <ul class="space-y-2">
        <li *ngFor="let todo of todos; let i = index" 
            class="flex justify-between items-center bg-gray-50 p-3 rounded-lg group">
          <span class="text-gray-700">{{ todo }}</span>
          <button 
            (click)="removeTodo(i)"
            class="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition">
            Delete
          </button>
        </li>
      </ul>
      
    
    </div>
  `
})
export class HeaderComponent {
  
  todos: string[] = ['Angular bilan ishlash'];


  addTodo(newTodo: string) {
    if (newTodo.trim()) {
      this.todos.push(newTodo);
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}