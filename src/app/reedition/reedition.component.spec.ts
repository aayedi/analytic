import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeditionComponent } from './reedition.component';

describe('ReeditionComponent', () => {
  let component: ReeditionComponent;
  let fixture: ComponentFixture<ReeditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReeditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReeditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
