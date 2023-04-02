import { Component } from '@angular/core';
import { DialogData } from 'src/app/content/interfaces/modal.interface';
import { ModalService } from 'src/app/content/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  modalInfo: DialogData = {
    title: '',
    component: ''
  }

  constructor(
    private modalService: ModalService
  ){}

  login(){
    this.modalInfo = {
      title: 'LOGIN',
      component: '<app-login-modal></app-login-modal>'
    }
    
    this.modalService.openModal(this.modalInfo);
  }

}
