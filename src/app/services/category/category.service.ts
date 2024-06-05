import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../../types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _baseURL: string = "http://localhost:3000";
  private _url: string = this._baseURL + "/terms" 

  constructor(private httpClient: HttpClient) { }

  loadCategories = ()=>{
    return this.httpClient.get<Category[]>(this._url)
  }
}
