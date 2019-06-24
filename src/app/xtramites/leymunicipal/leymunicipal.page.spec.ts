import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeymunicipalPage } from './leymunicipal.page';

describe('LeymunicipalPage', () => {
  let component: LeymunicipalPage;
  let fixture: ComponentFixture<LeymunicipalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeymunicipalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeymunicipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
