import { Component, Input } from '@angular/core';
import { Category } from '../../../types/Category';
import { CategoryService } from '../../services/category/category.service';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-categories-bar',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './categories-bar.component.html',
  styleUrl: './categories-bar.component.scss'
})
export class CategoriesBarComponent {
  public categories!: Category[];

  constructor(private _categoryService: CategoryService){}

  ngOnInit(){
    this._categoryService.loadCategories().subscribe({
      next: (categories)=>{this.categories = categories}
    })
  }
}
