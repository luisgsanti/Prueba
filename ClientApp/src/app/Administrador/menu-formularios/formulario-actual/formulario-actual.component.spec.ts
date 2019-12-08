import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioActualComponent } from './formulario-actual.component';

describe('FormularioActualComponent', () => {
  let component: FormularioActualComponent;
  let fixture: ComponentFixture<FormularioActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
