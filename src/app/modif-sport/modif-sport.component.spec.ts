import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSportComponent } from './modif-sport.component';

describe('ModifSportComponent', () => {
  let component: ModifSportComponent;
  let fixture: ComponentFixture<ModifSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
