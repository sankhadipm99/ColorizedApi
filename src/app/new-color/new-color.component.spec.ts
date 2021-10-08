import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColorComponent } from './new-color.component';

describe('NewColorComponent', () => {
  let component: NewColorComponent;
  let fixture: ComponentFixture<NewColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
