import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environments';
import { SponsoredModel } from '../interfaces/sponsored.interface';

@Injectable({
  providedIn: 'root'
})
export class SponsoredService {

  urlBase: string = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  public getSponsoreds(): Observable<SponsoredModel[]> {
    return this.http.get<SponsoredModel[]>(`${this.urlBase}getSponsoreds`);
  }
}