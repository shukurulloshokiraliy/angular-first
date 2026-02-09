import { Component } from '@angular/core';
import { Car } from '../../models/car';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // *ngFor uchun kerak

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  carName: string = ''; 
  carYear: Date = new Date();

  // 1. Massiv yaratamiz (Rasmda bo'lgani kabi)
  cars: Car[] = [
    { id: 1, name: 'Chevrolet Camaro', year: new Date('2020-01-01') }
  ];

  onSubmit() {
    // 2. Validatsiya: Ism bo'sh bo'lmasa va sana kiritilgan bo'lsa
    if (this.carName.length !== 0 && this.carYear) {
      
      const newCar: Car = {
        id: this.cars.length + 1, // Dinamik ID berish
        name: this.carName,
        year: this.carYear,
      };

      // 3. Massivga yangi mashinani qo'shish
      this.cars.push(newCar);

      // 4. Inputlarni tozalash
      this.carName = '';
      this.carYear = new Date();

      console.log('Updated Car List:', this.cars);
    }
  }
}