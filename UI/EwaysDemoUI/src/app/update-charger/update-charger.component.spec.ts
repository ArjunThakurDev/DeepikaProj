import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChargerComponent } from './update-charger.component';

describe('UpdateChargerComponent', () => {
  let component: UpdateChargerComponent;
  let fixture: ComponentFixture<UpdateChargerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateChargerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
