import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFormulariosComponent } from './menu-formularios.component';

describe('MenuFormulariosComponent', () => {
  let component: MenuFormulariosComponent;
  let fixture: ComponentFixture<MenuFormulariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFormulariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
