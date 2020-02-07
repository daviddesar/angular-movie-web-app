import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2contactusComponent } from './bt2contactus.component';

describe('Bt2contactusComponent', () => {
  let component: Bt2contactusComponent;
  let fixture: ComponentFixture<Bt2contactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2contactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2contactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
