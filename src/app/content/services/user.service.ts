import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environments';
import { UserLogin, UserModel } from '../interfaces/user.interface';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase: string = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  public postLogin(data:any): Observable<UserModel> {
    let name = data.data.payload.name;
    let password = data.data.payload.password;
    return this.http.post<UserModel>(`${this.urlBase}getUser`, { name, password });
  }
}