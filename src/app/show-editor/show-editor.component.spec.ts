import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEditorComponent } from './show-editor.component';

describe('ShowEditorComponent', () => {
  let component: ShowEditorComponent;
  let fixture: ComponentFixture<ShowEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
