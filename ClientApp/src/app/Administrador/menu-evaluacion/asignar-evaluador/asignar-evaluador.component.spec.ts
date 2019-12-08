import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarEvaluadorComponent } from './asignar-evaluador.component';

describe('AsignarEvaluadorComponent', () => {
  let component: AsignarEvaluadorComponent;
  let fixture: ComponentFixture<AsignarEvaluadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarEvaluadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
