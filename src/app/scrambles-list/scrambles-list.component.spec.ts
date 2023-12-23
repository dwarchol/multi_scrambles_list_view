import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScramblesListComponent } from './scrambles-list.component';

describe('ScramblesListComponent', () => {
  let component: ScramblesListComponent;
  let fixture: ComponentFixture<ScramblesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScramblesListComponent]
    });
    fixture = TestBed.createComponent(ScramblesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
