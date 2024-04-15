import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritycodescannerComponent } from './securitycodescanner.component';

describe('SecuritycodescannerComponent', () => {
  let component: SecuritycodescannerComponent;
  let fixture: ComponentFixture<SecuritycodescannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuritycodescannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecuritycodescannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
