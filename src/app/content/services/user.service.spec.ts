import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserModel } from '../interfaces/user.interface';
import { environment } from 'src/environments/environments';

describe('UserService', () => {
  let service: UserService;
  let httpController: HttpTestingController;
  let urlBase: string = environment.url;
  let url = `${urlBase}getUser`;
  let user: UserModel = {
    id: 1,
    userName: 'string',
    name: 'string',
    lastName: 'string',
    birthDate: 'string'
  };
  let name = 'carlos';
  let password = '123456'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getUser and return an user data', () => {
			
    service.postLogin(name, password).subscribe((res) => {
      expect(res).toEqual(user);
    });
    const req = httpController.expectOne({
      method: 'POST',
      url,
    });
    req.flush(user);
  });
});
