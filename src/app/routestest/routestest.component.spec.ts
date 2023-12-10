import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutestestComponent } from './routestest.component';

describe('RoutestestComponent', () => {
  let component: RoutestestComponent;
  let fixture: ComponentFixture<RoutestestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutestestComponent]
    });
    fixture = TestBed.createComponent(RoutestestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
