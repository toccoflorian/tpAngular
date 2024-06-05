import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../../../types/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private _baseURL: string = "http://localhost:3000";
  private _url: string = this._baseURL + "/cards" 

  constructor(private _httpClient: HttpClient) { }

  loadCards = ()=>{
    return this._httpClient.get<Card[]>(this._url)
  }

  deleteCard = (cardId: string)=>{
    const result = this._httpClient.delete<Card>(`${this._url}/${cardId}`);
    result.subscribe({
      next: ()=>{
        console.log('Card deleted');
      }
    })
  }
}
