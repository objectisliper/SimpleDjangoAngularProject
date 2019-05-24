import { Injectable } from '@angular/core';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  public static getItemIndexes<T>(a: T[]) {
    return a.map((item, index) => ({ item, index }));
  }

  public static getParamArrayString(arrayOfParams: Array<any>, key: string = 'param'): string {
    let params = '?' + key + '=';
    for (const item of arrayOfParams) {
      params += item + ',';
    }
    params = params.length === key.length + 2 ? '' : params.substring(0, params.length - 1);
    return params;
  }
}
