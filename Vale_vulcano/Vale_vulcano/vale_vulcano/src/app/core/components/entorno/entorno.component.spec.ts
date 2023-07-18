import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntornoComponent } from './entorno.component';

describe('EntornoComponent', () => {
  let component: EntornoComponent;
  let fixture: ComponentFixture<EntornoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntornoComponent]
    });
    fixture = TestBed.createComponent(EntornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
