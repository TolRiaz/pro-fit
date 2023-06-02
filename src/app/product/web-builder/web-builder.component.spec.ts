import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBuilderComponent } from './web-builder.component';

describe('WebBuilderComponent', () => {
  let component: WebBuilderComponent;
  let fixture: ComponentFixture<WebBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebBuilderComponent]
    });
    fixture = TestBed.createComponent(WebBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
