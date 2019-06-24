import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosPage } from './requisitos.page';

describe('RequisitosPage', () => {
  let component: RequisitosPage;
  let fixture: ComponentFixture<RequisitosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
