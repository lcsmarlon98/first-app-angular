import { TestBed } from '@angular/core/testing';

import { GithubApiService } from './github.service';

describe('GithubApiService', () => {
  let service: GithubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
