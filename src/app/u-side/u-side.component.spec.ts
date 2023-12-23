import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USideComponent } from './u-side.component';

describe('USideComponent', () => {
  let component: USideComponent;
  let fixture: ComponentFixture<USideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [USideComponent]
    });
    fixture = TestBed.createComponent(USideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
