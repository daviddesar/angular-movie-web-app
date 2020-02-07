import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLifecycleChildComponent } from './demo-lifecycle-child.component';

describe('DemoLifecycleChildComponent', () => {
  let component: DemoLifecycleChildComponent;
  let fixture: ComponentFixture<DemoLifecycleChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLifecycleChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLifecycleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
