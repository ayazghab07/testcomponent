import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSportsComponent } from './liste-sports.component';

describe('ListeSportsComponent', () => {
  let component: ListeSportsComponent;
  let fixture: ComponentFixture<ListeSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
