import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environments';

import { UserLogin } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase: string = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  public getLogin(user: string, password: string): Observable<UserLogin> {
    const headers = {user: user, password: password}
    return this.http.get<UserLogin>(`${this.urlBase}getUser`, { headers });
  }
}
