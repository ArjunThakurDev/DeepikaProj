import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerListComponent } from './charger-list.component';

describe('ChargerListComponent', () => {
  let component: ChargerListComponent;
  let fixture: ComponentFixture<ChargerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
