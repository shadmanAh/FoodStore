import { Tag } from './../../../shared/models/Tag';
import { FoodService } from './../../../services/food.service';
import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Foods';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[] = [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm)
      this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.foods = this.foodService.getAllFoodByTag(params.tag);
      else
      this.foods = foodService.getAll();
    })
  }
}
