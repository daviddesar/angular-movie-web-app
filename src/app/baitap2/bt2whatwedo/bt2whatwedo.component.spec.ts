import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2whatwedoComponent } from './bt2whatwedo.component';

describe('Bt2whatwedoComponent', () => {
  let component: Bt2whatwedoComponent;
  let fixture: ComponentFixture<Bt2whatwedoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2whatwedoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2whatwedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
