import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopquestionsComponent } from './topquestions.component';

describe('TopquestionsComponent', () => {
  let component: TopquestionsComponent;
  let fixture: ComponentFixture<TopquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
