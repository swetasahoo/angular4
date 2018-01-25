import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeCircleModalComponent } from './subscribe-circle-modal.component';

describe('SubscribeCircleModalComponent', () => {
  let component: SubscribeCircleModalComponent;
  let fixture: ComponentFixture<SubscribeCircleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeCircleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeCircleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
