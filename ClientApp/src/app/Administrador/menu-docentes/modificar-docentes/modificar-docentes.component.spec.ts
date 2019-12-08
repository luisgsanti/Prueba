import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDocentesComponent } from './modificar-docentes.component';

describe('ModificarDocentesComponent', () => {
  let component: ModificarDocentesComponent;
  let fixture: ComponentFixture<ModificarDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
