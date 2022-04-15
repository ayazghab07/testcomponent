import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMatchsComponent } from './liste-matchs.component';

describe('ListeMatchsComponent', () => {
  let component: ListeMatchsComponent;
  let fixture: ComponentFixture<ListeMatchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMatchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
