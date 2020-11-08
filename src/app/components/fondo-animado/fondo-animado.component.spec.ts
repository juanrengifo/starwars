import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoAnimadoComponent } from './fondo-animado.component';

describe('FondoAnimadoComponent', () => {
  let component: FondoAnimadoComponent;
  let fixture: ComponentFixture<FondoAnimadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoAnimadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoAnimadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
