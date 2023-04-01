import { FoodService } from './../../../services/food.service';
import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Foods';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[] = [];
  constructor(private foodService:FoodService){
    this.foods = foodService.getAll();
  }
}
