import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeudasPage } from './menu-deudas.page';

describe('MenuDeudasPage', () => {
  let component: MenuDeudasPage;
  let fixture: ComponentFixture<MenuDeudasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDeudasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDeudasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
