import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCategoryCardComponent } from './popular-category-card.component';

describe('PopularCategoryCardComponent', () => {
  let component: PopularCategoryCardComponent;
  let fixture: ComponentFixture<PopularCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularCategoryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
