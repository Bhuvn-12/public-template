import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FepmComponent } from './fepm.component';

describe('FepmComponent', () => {
  let component: FepmComponent;
  let fixture: ComponentFixture<FepmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FepmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FepmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
