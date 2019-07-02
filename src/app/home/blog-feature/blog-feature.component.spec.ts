import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFeatureComponent } from './blog-feature.component';

describe('BlogFeatureComponent', () => {
  let component: BlogFeatureComponent;
  let fixture: ComponentFixture<BlogFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
