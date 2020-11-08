import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpNaveComponent } from './pop-up-nave.component';

describe('PopUpNaveComponent', () => {
  let component: PopUpNaveComponent;
  let fixture: ComponentFixture<PopUpNaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpNaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
