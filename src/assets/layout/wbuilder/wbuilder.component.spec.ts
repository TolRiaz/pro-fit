import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbuilderComponent } from './wbuilder.component';

describe('WbuilderComponent', () => {
  let component: WbuilderComponent;
  let fixture: ComponentFixture<WbuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WbuilderComponent]
    });
    fixture = TestBed.createComponent(WbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
