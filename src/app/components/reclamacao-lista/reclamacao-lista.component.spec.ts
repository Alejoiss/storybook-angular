import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoListaComponent } from './reclamacao-lista.component';

describe('ReclamacaoListaComponent', () => {
  let component: ReclamacaoListaComponent;
  let fixture: ComponentFixture<ReclamacaoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamacaoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamacaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
