import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {RuleModel} from '../../models/RuleModel';

@Injectable({
  providedIn: 'root'
})
export class QuestionsApiService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public saveRule(rule: RuleModel): Observable<any> {

    return this.http.post(this.apiUrl + 'getAllQuestions', rule).pipe(map(response => {

      return response;

    }));

  };


}
