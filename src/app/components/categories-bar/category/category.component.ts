import { Component, Input } from '@angular/core';
import { Category } from '../../../../types/Category';
import { CategoryEventService } from '../../../services/events/category-event.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  @Input() category!: Category;

  constructor(private _categoryEventService: CategoryEventService){}

  handleClickCategory = (categoryId: string)=>{
    this._categoryEventService.emitCategoryEvent(categoryId);
  }
}
