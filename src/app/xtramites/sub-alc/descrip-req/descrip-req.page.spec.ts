import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripReqPage } from './descrip-req.page';

describe('DescripReqPage', () => {
  let component: DescripReqPage;
  let fixture: ComponentFixture<DescripReqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripReqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripReqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
