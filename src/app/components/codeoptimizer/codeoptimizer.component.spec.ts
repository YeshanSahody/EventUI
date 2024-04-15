import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeoptimizerComponent } from './codeoptimizer.component';

describe('CodeoptimizerComponent', () => {
  let component: CodeoptimizerComponent;
  let fixture: ComponentFixture<CodeoptimizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeoptimizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeoptimizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
