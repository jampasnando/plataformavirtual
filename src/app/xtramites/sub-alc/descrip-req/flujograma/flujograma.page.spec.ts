import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujogramaPage } from './flujograma.page';

describe('FlujogramaPage', () => {
  let component: FlujogramaPage;
  let fixture: ComponentFixture<FlujogramaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlujogramaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlujogramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
