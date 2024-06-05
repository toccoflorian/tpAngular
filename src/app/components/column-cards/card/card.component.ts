import { Component, Input } from '@angular/core';
import { Card } from '../../../../types/Card';
import { CardEventService } from '../../../services/events/card-event.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card!: Card;

  constructor(private _cardEventService: CardEventService){}

  public handleClickDeleteCard = ()=>{
    this._cardEventService.emitEvent(this.card.id)
  }
}
