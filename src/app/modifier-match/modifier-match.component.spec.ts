import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMatchComponent } from './modifier-match.component';

describe('ModifierMatchComponent', () => {
  let component: ModifierMatchComponent;
  let fixture: ComponentFixture<ModifierMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
