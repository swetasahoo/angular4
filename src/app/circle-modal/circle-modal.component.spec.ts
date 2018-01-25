import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleModalComponent } from './circle-modal.component';

describe('CircleModalComponent', () => {
  let component: CircleModalComponent;
  let fixture: ComponentFixture<CircleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
