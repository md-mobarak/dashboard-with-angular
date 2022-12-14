import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCommentChartComponent } from './like-comment-chart.component';

describe('LikeCommentChartComponent', () => {
  let component: LikeCommentChartComponent;
  let fixture: ComponentFixture<LikeCommentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeCommentChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeCommentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
