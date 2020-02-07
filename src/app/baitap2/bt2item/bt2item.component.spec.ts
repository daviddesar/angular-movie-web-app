import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2itemComponent } from './bt2item.component';

describe('Bt2itemComponent', () => {
  let component: Bt2itemComponent;
  let fixture: ComponentFixture<Bt2itemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2itemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2itemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
