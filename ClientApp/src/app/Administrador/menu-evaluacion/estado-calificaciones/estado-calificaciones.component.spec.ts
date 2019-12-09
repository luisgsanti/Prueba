import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCalificacionesComponent } from './estado-calificaciones.component';

describe('EstadoCalificacionesComponent', () => {
  let component: EstadoCalificacionesComponent;
  let fixture: ComponentFixture<EstadoCalificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoCalificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
