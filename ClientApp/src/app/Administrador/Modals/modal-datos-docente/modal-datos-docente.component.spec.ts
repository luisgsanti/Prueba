import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDatosDocenteComponent } from './modal-datos-docente.component';

describe('ModalDatosDocenteComponent', () => {
  let component: ModalDatosDocenteComponent;
  let fixture: ComponentFixture<ModalDatosDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDatosDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDatosDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
