import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivarDocentesComponent } from './desactivar-docentes.component';

describe('DesactivarDocentesComponent', () => {
  let component: DesactivarDocentesComponent;
  let fixture: ComponentFixture<DesactivarDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesactivarDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesactivarDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
