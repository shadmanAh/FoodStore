import { FoodService } from './../../../services/food.service';
import { Tag } from './../../../shared/models/Tag';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(foodService:FoodService){
    this.tags = foodService.getAllTags();
  }
}
