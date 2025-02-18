import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component1Component } from './component1.component';

describe('Component1Component', () => {
  let component: Component1Component;
  let fixture: ComponentFixture<Component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component1Component]
    })
      .compileComponents();
    fixture = TestBed.createComponent(Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Create 25 dummy tests to simulate a large test suite
  for (let i = 1; i <= 25; i++) {
    it('should create: ' + i, () => {
      expect(component).toBeTruthy();
    });
  }
});
