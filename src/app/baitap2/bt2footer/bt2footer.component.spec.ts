import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2footerComponent } from './bt2footer.component';

describe('Bt2footerComponent', () => {
  let component: Bt2footerComponent;
  let fixture: ComponentFixture<Bt2footerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2footerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2footerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
