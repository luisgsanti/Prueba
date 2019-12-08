import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAsignarJefeComponent } from './modal-asignar-jefe.component';

describe('ModalAsignarJefeComponent', () => {
  let component: ModalAsignarJefeComponent;
  let fixture: ComponentFixture<ModalAsignarJefeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAsignarJefeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAsignarJefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
