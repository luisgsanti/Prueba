import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPreguntasComponent } from './consultar-preguntas.component';

describe('ConsultarPreguntasComponent', () => {
  let component: ConsultarPreguntasComponent;
  let fixture: ComponentFixture<ConsultarPreguntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPreguntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
