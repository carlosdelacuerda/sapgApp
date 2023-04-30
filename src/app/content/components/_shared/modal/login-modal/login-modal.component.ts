import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserModel, UserLogin } from 'src/app/content/interfaces/user.interface';
import { UserService } from 'src/app/content/services/user.service';
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
    private userService: UserService
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
      this.userService.postLogin(user.name, user.password).subscribe( response =>
        console.log(response)
      )

    }


}
