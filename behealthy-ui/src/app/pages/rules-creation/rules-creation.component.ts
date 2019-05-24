import { Component, OnInit } from '@angular/core';
import {RuleModel} from '../../models/RuleModel';
import {BaseService} from '../../services/BaseService';
import {AppComponent} from '../../app.component';
import {QuestionsApiService} from '../../services/api-services/questions.api.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-rules-creation',
  templateUrl: './rules-creation.component.html',
  styleUrls: ['./rules-creation.component.css']
})
export class RulesCreationComponent implements OnInit {



  options: Array<string> = ['gender', 'age', 'abdominal_pain', 'systolic_bp', 'diastolic_bp' ];

  value_relations: Array<string> = ['=', '<', '>', '>=', '<='];

  expressions_relations: Array<string> = ['and', 'or', 'or not', 'and not'];

  expressions_array: RuleModel = {'expressions': [{ 'parameter': 'gender', 'related_to_value_by': '=', 'value': '18'}],
    'question': ''};

  gender: Array<string> = ['male', 'female'];

  abdominal_pain: Array<string> = ['yes', 'no'];

  constructor(private appComponent: AppComponent, private questionsApiService: QuestionsApiService,
              private snackBar: MatSnackBar) {
    appComponent.title = 'Create new rules and questions';
    appComponent.buttonTitle = 'Test questions';
    appComponent.buttonLink = '';
  }

  ngOnInit() {
  }

  addExpression(): void {
    this.expressions_array.expressions.push({'related_to_previous_exp_by': 'and', 'parameter': 'gender',
      'related_to_value_by': '=', 'value': '18'});
  }

  deleteExpression(index: number): void {
    this.expressions_array.expressions.splice(index, 1);
    if (index === 0){
      delete this.expressions_array.expressions[0].related_to_previous_exp_by;
    }
  }

  isOneOfFieldsEmpty(index: number): boolean {
    const exprs = this.expressions_array.expressions[index];
    const exprsKeys = Object.keys(exprs);

    for (const key of exprsKeys) {
      if (!exprs[key] || exprs[key] === '') {
        return true;
      }
    }
    return !!(this.expressions_array.question === '');

  }

  isAbdominalPainOrGenderChosen(index: number): boolean {
    if (this.expressions_array.expressions[index].parameter !== 'gender' &&
      this.expressions_array.expressions[index].parameter !== 'abdominal_pain') {

      if (this.gender.indexOf(this.expressions_array.expressions[index].value) > -1 ||
        this.abdominal_pain.indexOf(this.expressions_array.expressions[index].value) > -1) {
        this.expressions_array.expressions[index].value = '';
      }

      return false;

    } else if (this.gender.indexOf(this.expressions_array.expressions[index].value) < 0 &&
      this.abdominal_pain.indexOf(this.expressions_array.expressions[index].value) < 0) {

      this.expressions_array.expressions[index].value = '';

    }

    return true;
  }

  isAnyOfFieldsEmpty(): boolean{
    for (const {item, index} of BaseService.getItemIndexes(this.expressions_array.expressions)){
      if (this.isOneOfFieldsEmpty(index)) {
        return true;
      }
    }

    return false;
  }

  saveRule(): void {
    this.questionsApiService.saveRule(this.expressions_array).subscribe(
      () => {
        this.expressions_array = {'expressions': [{ 'parameter': 'gender', 'related_to_value_by': '=', 'value': '18'}],
          'question': ''};

        this.snackBar.open('Rule saved successfully', 'Close', {
          duration: 10000,
        });

      },
      () => {
        this.snackBar.open('Something went wrong, try again later', 'Close', {
          duration: 10000,
        });
      }
    );
  }

}
