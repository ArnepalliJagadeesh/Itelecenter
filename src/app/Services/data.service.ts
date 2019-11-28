import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NumberModel } from '../Models/NumberModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private SearchType = new BehaviorSubject('' as string);
  CurrentSearchType = this.SearchType.asObservable();

  private NumberData = new BehaviorSubject({} as NumberModel);
  CurrentNumberData = this.NumberData.asObservable();

  constructor() { }

  UpdateSearchType(searchType: string) {
    this.SearchType.next(searchType);
  }

  UpdateNumberData(numberdata: NumberModel) {
    this.NumberData.next(numberdata);
  }
}
