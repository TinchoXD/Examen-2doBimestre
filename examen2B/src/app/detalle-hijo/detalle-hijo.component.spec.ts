import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHijoComponent } from './detalle-hijo.component';

describe('DetalleHijoComponent', () => {
  let component: DetalleHijoComponent;
  let fixture: ComponentFixture<DetalleHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
