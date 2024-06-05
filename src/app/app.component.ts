import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CategoriesBarComponent } from './components/categories-bar/categories-bar.component';
import { ColumnCardService } from './services/columnCard/column-card.service';
import { ColumnCard } from '../types/ColumnCard';
import { ColumnCardsComponent } from './components/column-cards/column-cards.component';
import { Card } from '../types/Card';
import { CardService } from './services/card/card.service';
import { CategoryEventService } from './services/events/category-event.service';
import { CardEventService } from './services/events/card-event.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CategoriesBarComponent, ColumnCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'tpAngular';
  public columnCards!: ColumnCard[];
  public cards: Card[] = [];
  private _categoryIdFilter: string | undefined;
  constructor(
    private _columnCardService: ColumnCardService, 
    private _cardService: CardService, 
    private _categoryEventService: CategoryEventService,
    private _cardEventService: CardEventService){}

  ngOnInit(){
    this._columnCardService.loadColumnCards().subscribe({
      next: (value)=>{
        this.columnCards = value; 
        value.forEach(columnCard=>{
          columnCard.cards.forEach(card=>{
            this.cards.push(card);
          })
        })
    }});

    this._categoryEventService.event$.subscribe({
      next: (categoryId)=>{
        
        this.columnCards.map(columnCard=>{
          columnCard.cards = this.cards.filter(card =>{
            this._categoryIdFilter = categoryId;
            return card.term === categoryId && card.column === columnCard.id;
          })
        })
      }
    });

    this._cardEventService.event$.subscribe({
      next: (cardId)=>{
        
        this.columnCards.map(columnCard=>{
          columnCard.cards = this.cards.filter(card =>{
            // console.log(card.term, categoryId, card.term === categoryId);
            return this._categoryIdFilter ?
              card.id !== cardId && card.column === columnCard.id && card.column === this._categoryIdFilter
              :
              card.id !== cardId && card.column === columnCard.id
          })
        });

        this.cards = this.cards.filter(card=>{
          return card.id !== cardId;
        });

        this._cardService.deleteCard(cardId);
      }
    })
  }
}
