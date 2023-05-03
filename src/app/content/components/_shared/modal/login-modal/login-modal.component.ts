import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel, UserLogin } from 'src/app/content/interfaces/user.interface';
import { loadUser } from 'src/app/content/state/actions/user.actions';
import { AppState } from 'src/app/content/state/app.state';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  user$: Observable<UserModel> = new Observable;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
    ){}

    ngOnInit(): void {
      this.buildForm()
    }

    public buildForm() {
      this.formGroup = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)]),    
      });
    }

    sendLogin() {
      let user: UserLogin  = this.formGroup.value
      this.store.dispatch(loadUser());
    }


}
