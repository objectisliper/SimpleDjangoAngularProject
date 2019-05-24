import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {QuestionFormModel} from '../../models/QuestionFormModel';
import {MatSnackBar} from '@angular/material';
import {QuestionsApiService} from '../../services/api-services/questions.api.service';

@Component({
  selector: 'app-data-scrub',
  templateUrl: './data-scrub.component.html',
  styleUrls: ['./data-scrub.component.css']
})
export class DataScrubComponent implements OnInit {

  questionForm: QuestionFormModel = new QuestionFormModel();

  questions: Array<string> = [];

  genders: Array<string> = ['male', 'female'];

  abdominal_pain_answers: Array<string> = ['yes', 'no'];

  constructor(private appComponent: AppComponent, private snackBar: MatSnackBar, private questionApiService: QuestionsApiService) {
    appComponent.title = 'Fill the form, to see questions';
    appComponent.buttonTitle = 'Create new rules and questions';
    appComponent.buttonLink = '/create-rules';
  }

  ngOnInit() {
  }

  isAllFieldsEmpty(): boolean {
    const exprs = this.questionForm;
    const exprsKeys = Object.keys(exprs);

    let emptyFieldsCounter = 0;

    for (const key of exprsKeys) {
      if (!exprs[key] || exprs[key] === '') {
        emptyFieldsCounter++;
      }
    }

    return emptyFieldsCounter >= exprsKeys.length;
  }

  processForm(): void {
    if (this.isAllFieldsEmpty()) {
      this.snackBar.open('Fill at least one field', 'Close', {
        duration: 10000,
      });

      return;
    }

    this.questionApiService.processForm(this.questionForm).subscribe(
      response => {
        if (response['data'].length < 1) {
          this.snackBar.open('We don\'t have questions to you\'r params!', 'Close', {
            duration: 10000,
          });
        } else {
          this.questionApiService.getQuestions(response['data']).subscribe( questions => {
            this.questions.splice(0);
            for (const question of questions['data']) {
              this.questions.push(question['description']);
            }
          }, () => {
            this.snackBar.open('Something went wrong, try again later!', 'Close', {
              duration: 10000,
            });
          });
        }
      },
      () => {
        this.snackBar.open('Something went wrong, try again later!', 'Close', {
          duration: 10000,
        });
      }
    );
  }

}
