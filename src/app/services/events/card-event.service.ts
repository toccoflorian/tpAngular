import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardEventService {
  private _eventSubject = new Subject<string>();

  public event$ = this._eventSubject.asObservable()

  constructor() { }

  emitEvent = (cardId: string)=>{
    this._eventSubject.next(cardId);
  }
}
