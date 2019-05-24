import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {RuleModel} from '../../models/RuleModel';
import {QuestionFormModel} from '../../models/QuestionFormModel';
import {BaseService} from '../BaseService';

@Injectable({
  providedIn: 'root'
})
export class QuestionsApiService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public saveRule(rule: RuleModel): Observable<any> {

    return this.http.post(this.apiUrl + 'questions', rule).pipe(map(response => {

      return response;

    }));

  }

  public processForm(form: QuestionFormModel): Observable<any> {

    return this.http.post(this.apiUrl + 'rules', form).pipe(map(response => {

      return response;

    }));

  }

  public getQuestions(question_ids: Array<{'ask_question': number}>): Observable<any> {
    const question_ids_array = [];
    for (const question_id of question_ids) {
      question_ids_array.push(question_id['ask_question']);
    }
    const params = BaseService.getParamArrayString(question_ids_array, 'question_ids');
    return this.http.get(this.apiUrl + 'questions' + params).pipe(map(response => {

      return response;

    }));

  }


}
