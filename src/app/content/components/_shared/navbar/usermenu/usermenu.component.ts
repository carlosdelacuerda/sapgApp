import { Component, Input, ViewChild } from '@angular/core';
import { UserModel } from 'src/app/content/interfaces/user.interface';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.scss']
})
export class UsermenuComponent {

  @Input() user: UserModel = {
    id: 0,
    userName: 'GUEST',
    name: '',
    lastName: '',
    birthDate: ''
  }

}
