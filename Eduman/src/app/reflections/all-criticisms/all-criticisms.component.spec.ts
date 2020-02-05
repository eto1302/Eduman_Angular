import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCriticismsComponent } from './all-criticisms.component';

describe('AllCriticismsComponent', () => {
  let component: AllCriticismsComponent;
  let fixture: ComponentFixture<AllCriticismsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCriticismsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCriticismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
