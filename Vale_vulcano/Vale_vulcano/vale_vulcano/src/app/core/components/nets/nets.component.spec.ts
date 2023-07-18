import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetsComponent } from './nets.component';

describe('NetsComponent', () => {
  let component: NetsComponent;
  let fixture: ComponentFixture<NetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetsComponent]
    });
    fixture = TestBed.createComponent(NetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
