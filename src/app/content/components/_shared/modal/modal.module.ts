import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ModalComponent,
    LoginModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ModalComponent
  ],
  entryComponents: [ModalComponent]
})
export class ModalModule { }
