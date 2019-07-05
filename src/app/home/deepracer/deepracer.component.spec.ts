import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepracerComponent } from './deepracer.component';

describe('DeepracerComponent', () => {
  let component: DeepracerComponent;
  let fixture: ComponentFixture<DeepracerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepracerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepracerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
