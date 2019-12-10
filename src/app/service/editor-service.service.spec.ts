import { TestBed } from '@angular/core/testing';

import { EditorServiceService } from './editor-service.service';

describe('EditorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditorServiceService = TestBed.get(EditorServiceService);
    expect(service).toBeTruthy();
  });
});
