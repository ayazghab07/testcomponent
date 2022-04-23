import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SporttableComponent } from './sporttable.component';

describe('SporttableComponent', () => {
  let component: SporttableComponent;
  let fixture: ComponentFixture<SporttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SporttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SporttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
