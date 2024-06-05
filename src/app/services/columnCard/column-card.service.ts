import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColumnCard } from '../../../types/ColumnCard';
import { Observable, map, switchMap, tap } from 'rxjs';
import { CardService } from '../card/card.service';
import { Card } from '../../../types/Card';

@Injectable({
  providedIn: 'root'
})
export class ColumnCardService {
  private _baseURL: string = "http://localhost:3000";
  private _url: string = this._baseURL + "/columns" 

  constructor(private _httpClient: HttpClient, private _cardService: CardService) { }

  loadColumnCards = ()=>{

    return this._httpClient.get<ColumnCard[]>(this._url).pipe(
      switchMap((columnCards: ColumnCard[])=>{
        return this._cardService.loadCards().pipe(
          map((cards: Card[])=>{
            columnCards.forEach((columnCard: ColumnCard)=>{
              columnCard.cards = cards.filter(card=>{
                return card.column === columnCard.id;
              })
            })
            return columnCards;
          })
        )
      }),
      tap((columnCard)=>{
        console.log('columnCard', columnCard);
        
      })
    );
  }
}
