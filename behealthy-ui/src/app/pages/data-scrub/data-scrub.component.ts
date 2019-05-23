import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-data-scrub',
  templateUrl: './data-scrub.component.html',
  styleUrls: ['./data-scrub.component.css']
})
export class DataScrubComponent implements OnInit {

  constructor(private appComponent: AppComponent) {
    appComponent.title = 'Fill the form, to see questions';
    appComponent.buttonTitle = 'Create new rules and questions';
    appComponent.buttonLink = '/create-rules';
  }

  ngOnInit() {
  }

}
