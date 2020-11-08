import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEspecieComponent } from './pop-up-especie.component';

describe('PopUpEspecieComponent', () => {
  let component: PopUpEspecieComponent;
  let fixture: ComponentFixture<PopUpEspecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpEspecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
