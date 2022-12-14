import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCartComponent } from './rating-cart.component';

describe('RatingCartComponent', () => {
  let component: RatingCartComponent;
  let fixture: ComponentFixture<RatingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
