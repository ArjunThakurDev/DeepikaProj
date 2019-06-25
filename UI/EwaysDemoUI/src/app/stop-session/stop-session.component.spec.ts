import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopSessionComponent } from './stop-session.component';

describe('StopSessionComponent', () => {
  let component: StopSessionComponent;
  let fixture: ComponentFixture<StopSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
