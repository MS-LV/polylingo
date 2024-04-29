import { TestBed } from '@angular/core/testing';

import { DictionaryDialogService } from './dictionary-dialog.service';

describe('DictionaryDialogService', () => {
  let service: DictionaryDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
