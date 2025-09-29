import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spotify-a');
  name:string = 'Esteban';
  age:number = 39;
  phone:null = null;
  phone2:undefined = undefined;
  phone3: any = undefined;
  status:string | number = 'active';
  

  car: CarModel = {
    brand: 'Toyota',
    model: 'Corolla'
  };

  listCars : Array<CarModel> = [
    {
      brand: 'Toyota',
      model: 'Corolla'
    },
    {
      brand: 'MG',
      model: '3'
    },
  ];


}

interface CarModel {
  brand: string;
  model: string;
  year?: number; //? Campo opcional
}
