import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPlanetaComponent } from './pop-up-planeta.component';

describe('PopUpPlanetaComponent', () => {
  let component: PopUpPlanetaComponent;
  let fixture: ComponentFixture<PopUpPlanetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpPlanetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
