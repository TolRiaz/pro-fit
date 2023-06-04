import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WblockComponent } from './wblock.component';

describe('WblockComponent', () => {
  let component: WblockComponent;
  let fixture: ComponentFixture<WblockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WblockComponent]
    });
    fixture = TestBed.createComponent(WblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
