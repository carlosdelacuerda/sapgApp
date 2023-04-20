import { Component, Input } from '@angular/core';
import { SponsoredModel } from 'src/app/content/interfaces/sponsored.interface';
@Component({
  selector: 'app-sponsored-card',
  templateUrl: './sponsored-card.component.html',
  styleUrls: ['./sponsored-card.component.scss']
})
export class SponsoredCardComponent {

  @Input()data: SponsoredModel = {
    id: 1,
    name: '',
    birth: '',
    description: '',
    imgs: []
  }

}
