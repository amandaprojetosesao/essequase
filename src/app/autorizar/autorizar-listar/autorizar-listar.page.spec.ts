import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizarListarPage } from './autorizar-listar.page';

describe('AutorizarListarPage', () => {
  let component: AutorizarListarPage;
  let fixture: ComponentFixture<AutorizarListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizarListarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizarListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
