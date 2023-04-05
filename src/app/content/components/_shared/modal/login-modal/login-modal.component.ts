import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { loginModal } from '../../../../interfaces/forms.interface'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });


}
