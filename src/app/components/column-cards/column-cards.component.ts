import { Component, Input } from '@angular/core';
import { ColumnCard } from '../../../types/ColumnCard';
import { CardComponent } from './card/card.component';
import { Subscription } from 'rxjs';
import { CategoryEventService } from '../../services/events/category-event.service';

@Component({
  selector: 'app-column-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './column-cards.component.html',
  styleUrl: './column-cards.component.scss'
})
export class ColumnCardsComponent {

  @Input() columnCard!: ColumnCard;

  constructor(){}

  ngOnInit(){
    
  }
}
