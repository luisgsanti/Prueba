import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAsignarParComponent } from './modal-asignar-par.component';

describe('ModalAsignarParComponent', () => {
  let component: ModalAsignarParComponent;
  let fixture: ComponentFixture<ModalAsignarParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAsignarParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAsignarParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
