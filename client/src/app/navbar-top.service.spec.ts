import { TestBed } from '@angular/core/testing';

import { NavbarTopService } from './navbar-top.service';

describe('NavbarTopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarTopService = TestBed.get(NavbarTopService);
    expect(service).toBeTruthy();
  });
});
