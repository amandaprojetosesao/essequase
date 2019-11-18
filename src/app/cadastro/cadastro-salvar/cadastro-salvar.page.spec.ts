import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSalvarPage } from './cadastro-salvar.page';

describe('CadastroSalvarPage', () => {
  let component: CadastroSalvarPage;
  let fixture: ComponentFixture<CadastroSalvarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSalvarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSalvarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
