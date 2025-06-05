import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFreeCourseCardComponent } from './new-free-course-card.component';

describe('NewFreeCourseCardComponent', () => {
  let component: NewFreeCourseCardComponent;
  let fixture: ComponentFixture<NewFreeCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFreeCourseCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFreeCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
