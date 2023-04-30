import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environments';
import { UserModel } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase: string = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  public postLogin(user: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.urlBase}getUser`, { user, password });
  }
}
