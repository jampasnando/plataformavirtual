import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaBuzonsugerenciasPage } from './consulta-buzonsugerencias.page';

describe('ConsultaBuzonsugerenciasPage', () => {
  let component: ConsultaBuzonsugerenciasPage;
  let fixture: ComponentFixture<ConsultaBuzonsugerenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaBuzonsugerenciasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaBuzonsugerenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
