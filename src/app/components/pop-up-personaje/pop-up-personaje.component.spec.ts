import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPersonajeComponent } from './pop-up-personaje.component';

describe('PopUpPersonajeComponent', () => {
  let component: PopUpPersonajeComponent;
  let fixture: ComponentFixture<PopUpPersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpPersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
