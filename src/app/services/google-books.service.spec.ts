import { TestBed, inject } from '@angular/core/testing';

import { GoogleBooksService } from './google-books.service';

describe('GoogleBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleBooksService]
    });
  });

  it('should be created', inject([GoogleBooksService], (service: GoogleBooksService) => {
    expect(service).toBeTruthy();
  }));
});
