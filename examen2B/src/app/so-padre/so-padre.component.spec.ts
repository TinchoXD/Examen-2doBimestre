import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SOPadreComponent } from './so-padre.component';

describe('SOPadreComponent', () => {
  let component: SOPadreComponent;
  let fixture: ComponentFixture<SOPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SOPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SOPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
