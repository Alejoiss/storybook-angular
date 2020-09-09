import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoItemComponent } from './reclamacao-item.component';

describe('ReclamacaoItemComponent', () => {
  let component: ReclamacaoItemComponent;
  let fixture: ComponentFixture<ReclamacaoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamacaoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamacaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
