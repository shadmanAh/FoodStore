import { sample_foods } from './../../data';
import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
