import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDetailsComponent } from './public-details.component';

describe('PublicDetailsComponent', () => {
  let component: PublicDetailsComponent;
  let fixture: ComponentFixture<PublicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
