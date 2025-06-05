import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFreeCoursesComponent } from './new-free-courses.component';

describe('NewFreeCoursesComponent', () => {
  let component: NewFreeCoursesComponent;
  let fixture: ComponentFixture<NewFreeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFreeCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFreeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
