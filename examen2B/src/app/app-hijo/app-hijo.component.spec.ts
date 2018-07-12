import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APPHijoComponent } from './app-hijo.component';

describe('APPHijoComponent', () => {
  let component: APPHijoComponent;
  let fixture: ComponentFixture<APPHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APPHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APPHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
