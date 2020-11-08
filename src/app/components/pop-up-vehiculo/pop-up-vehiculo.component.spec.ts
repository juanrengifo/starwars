import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpVehiculoComponent } from './pop-up-vehiculo.component';

describe('PopUpVehiculoComponent', () => {
  let component: PopUpVehiculoComponent;
  let fixture: ComponentFixture<PopUpVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
