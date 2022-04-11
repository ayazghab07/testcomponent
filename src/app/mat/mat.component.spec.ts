import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchComponent } from './mat.component';

describe('MatComponent', () => {
  let component: MatchComponent;
  let fixture: ComponentFixture<MatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
