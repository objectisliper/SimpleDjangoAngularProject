import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesCreationComponent } from './rules-creation.component';

describe('RulesCreationComponent', () => {
  let component: RulesCreationComponent;
  let fixture: ComponentFixture<RulesCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
