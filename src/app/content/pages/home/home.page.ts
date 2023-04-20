import { Component, OnInit } from '@angular/core';
import { SponsoredModel } from '../../interfaces/sponsored.interface';
import { Store } from '@ngrx/store';
import { loadSponsoreds } from '../../state/actions/sponsoreds.actions';
import { Observable } from 'rxjs';
import { selectSponsoredList, selectSponsoredLoad } from '../../state/selectors/sponsoreds.selectors';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  list$: Observable<any> = new Observable; 
  loading$: Observable<boolean> = new Observable;
  list: SponsoredModel[] = [];

  constructor(
    private store: Store<AppState>,
  ){ }

  ngOnInit(): void {
    this.store.dispatch(loadSponsoreds());
    this.loading$ = this.store.select(selectSponsoredLoad);

    this.list$ = this.store.select(selectSponsoredList)
    this.list$.subscribe(x => this.list = x.sponsoreds)
        
  }

 }
