import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzabelaMapaNumerologico } from './izabela-mapa-numerologico';

describe('IzabelaMapaNumerologico', () => {
  let component: IzabelaMapaNumerologico;
  let fixture: ComponentFixture<IzabelaMapaNumerologico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IzabelaMapaNumerologico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IzabelaMapaNumerologico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
