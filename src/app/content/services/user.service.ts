import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environments';
import { UserData } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase: string = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  public getLogin(user: string, password: string): Observable<UserData> {
    const headers = {user, password}
    return this.http.get<UserData>(`${this.urlBase}getUser`, { headers });
  }
}
