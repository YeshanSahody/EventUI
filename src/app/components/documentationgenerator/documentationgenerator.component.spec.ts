import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationgeneratorComponent } from './documentationgenerator.component';

describe('DocumentationgeneratorComponent', () => {
  let component: DocumentationgeneratorComponent;
  let fixture: ComponentFixture<DocumentationgeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentationgeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentationgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
