import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/content/interfaces/user.interface';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  user$: Observable<UserData> = this.store.select(state => state.userData);

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ userData: UserData }>
    ){}

    ngOnInit(): void {
      this.buildForm()
      this.user$.subscribe()
    }

    public buildForm() {
      this.formGroup = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)]),    
      });
    }

    sendLogin() {
      this.store.dispatch({ type: '[Login Page] Get User' });
    }


}
