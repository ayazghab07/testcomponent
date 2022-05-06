import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matchparieur2Component } from './matchparieur2.component';

describe('Matchparieur2Component', () => {
  let component: Matchparieur2Component;
  let fixture: ComponentFixture<Matchparieur2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Matchparieur2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Matchparieur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
