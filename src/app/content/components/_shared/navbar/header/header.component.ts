import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/content/interfaces/user.interface';
import { UserState } from 'src/app/content/interfaces/user.interface';
import { AppState } from 'src/app/content/state/app.state';
import { selectSponsoredLogin, selectUserData } from 'src/app/content/state/selectors/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loged: boolean = false;
  loged$: Observable<boolean> = new Observable;
  user: UserModel = {
    id: 0,
    userName: 'GUEST',
    name: '',
    lastName: '',
    birthDate: ''
  }
  user$: Observable<UserModel>= new Observable

  constructor(
    private store: Store<AppState>
   ){}

  ngOnInit(): void {
    this.loged$ = this.store.select(selectSponsoredLogin)
    this.loged$.subscribe(x => this.loged = x)
    this.user$ = this.store.select(selectUserData)
    this.user$.subscribe(x => console.log(x))
  }

}
