import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { SponsoredCardComponent } from '../../components/home/sponsored-card/sponsored-card.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HomePage,
    SponsoredCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule
  ]
})
export class HomeModule { }
