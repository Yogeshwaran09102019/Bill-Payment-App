import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCylinderComponent } from './book-cylinder.component';

describe('BookCylinderComponent', () => {
  let component: BookCylinderComponent;
  let fixture: ComponentFixture<BookCylinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCylinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCylinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
