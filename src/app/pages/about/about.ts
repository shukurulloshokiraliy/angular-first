import { Component } from '@angular/core';
import { Car } from '../../models/car';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], 
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  
  carName: string = ''; 
  carYear: Date = new Date();

  cars: Car[] = [
    { id: 1, name: 'Chevrolet Camaro', year: new Date('2020-01-01') }
  ];

  onSubmit() {
    if (this.carName.length !== 0 && this.carYear) {
      const newCar: Car = {
        id: this.cars.length + 1,
        name: this.carName,
        year: this.carYear,
      };
      this.cars.push(newCar);
      this.carName = '';
      this.carYear = new Date();
    }
  }
}