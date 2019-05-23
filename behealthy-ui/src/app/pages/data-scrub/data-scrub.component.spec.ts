import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScrubComponent } from './data-scrub.component';

describe('DataScrubComponent', () => {
  let component: DataScrubComponent;
  let fixture: ComponentFixture<DataScrubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataScrubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScrubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
