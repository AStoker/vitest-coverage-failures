import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component2Component } from './component2.component';

describe('Component2Component', () => {
  let component: Component2Component;
  let fixture: ComponentFixture<Component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component2Component]
    })
      .compileComponents();
    fixture = TestBed.createComponent(Component2Component);
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
