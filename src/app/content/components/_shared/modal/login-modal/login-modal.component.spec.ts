import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginModalComponent } from './login-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginModalComponent', () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        LoginModalComponent
       ],
      imports: [
        HttpClientModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
