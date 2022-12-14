import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachChartComponent } from './reach-chart.component';

describe('ReachChartComponent', () => {
  let component: ReachChartComponent;
  let fixture: ComponentFixture<ReachChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
