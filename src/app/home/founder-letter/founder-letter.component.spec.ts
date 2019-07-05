import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderLetterComponent } from './founder-letter.component';

describe('FounderLetterComponent', () => {
  let component: FounderLetterComponent;
  let fixture: ComponentFixture<FounderLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FounderLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FounderLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
