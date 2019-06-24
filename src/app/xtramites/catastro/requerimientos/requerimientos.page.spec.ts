import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimientosPage } from './requerimientos.page';

describe('RequerimientosPage', () => {
  let component: RequerimientosPage;
  let fixture: ComponentFixture<RequerimientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequerimientosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequerimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
