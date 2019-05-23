import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  public static getItemIndexes<T>(a: T[]) {
    return a.map((item, index) => ({ item, index }));
  }
}
