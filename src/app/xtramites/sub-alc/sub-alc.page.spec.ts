import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlcPage } from './sub-alc.page';

describe('SubAlcPage', () => {
  let component: SubAlcPage;
  let fixture: ComponentFixture<SubAlcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAlcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAlcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
