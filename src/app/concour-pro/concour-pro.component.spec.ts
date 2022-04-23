import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcourProComponent } from './concour-pro.component';

describe('ConcourProComponent', () => {
  let component: ConcourProComponent;
  let fixture: ComponentFixture<ConcourProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcourProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcourProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
