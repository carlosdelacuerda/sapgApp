import { TestBed } from '@angular/core/testing';

import { SponsoredService } from './sponsored.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SponsoredModel } from '../interfaces/sponsored.interface';
import { environment } from 'src/environments/environments';
describe('SponsoredService', () => {
  let service: SponsoredService;
  let httpController: HttpTestingController;
  let urlBase: string = environment.url;
  let url = `${urlBase}getSponsoreds`;
  let sponsoredsArray: SponsoredModel[] = []

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(SponsoredService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getSponsoreds and return an array of Sponsoreds', () => {
			
    service.getSponsoreds().subscribe((res) => {
      expect(res).toEqual(sponsoredsArray);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url,
    });
    req.flush(sponsoredsArray);
  });

  
});
