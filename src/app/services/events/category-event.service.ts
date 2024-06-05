import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryEventService {
  private eventSubject: Subject<string> = new Subject<string>();

  public event$ = this.eventSubject.asObservable();

  public emitCategoryEvent = (categoryId: string)=>{
    this.eventSubject.next(categoryId);
  }

  constructor() { }
}
