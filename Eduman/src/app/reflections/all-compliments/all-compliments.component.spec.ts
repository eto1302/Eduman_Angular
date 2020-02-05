import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComplimentsComponent } from './all-compliments.component';

describe('AllComplimentsComponent', () => {
  let component: AllComplimentsComponent;
  let fixture: ComponentFixture<AllComplimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllComplimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComplimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
