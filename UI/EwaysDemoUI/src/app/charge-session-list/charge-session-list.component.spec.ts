import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeSessionListComponent } from './charge-session-list.component';

describe('ChargeSessionListComponent', () => {
  let component: ChargeSessionListComponent;
  let fixture: ComponentFixture<ChargeSessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeSessionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
