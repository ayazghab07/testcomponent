import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcoursNaComponent } from './concours-na.component';

describe('ConcoursNaComponent', () => {
  let component: ConcoursNaComponent;
  let fixture: ComponentFixture<ConcoursNaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcoursNaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcoursNaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
