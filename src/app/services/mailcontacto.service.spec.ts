import { TestBed } from '@angular/core/testing';

import { MailcontactoService } from './mailcontacto.service';

describe('MailcontactoService', () => {
  let service: MailcontactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailcontactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
