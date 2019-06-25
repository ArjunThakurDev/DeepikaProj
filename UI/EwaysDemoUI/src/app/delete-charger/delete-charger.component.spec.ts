import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChargerComponent } from './delete-charger.component';

describe('DeleteChargerComponent', () => {
  let component: DeleteChargerComponent;
  let fixture: ComponentFixture<DeleteChargerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteChargerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteChargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
