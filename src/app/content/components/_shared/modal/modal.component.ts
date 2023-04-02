import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/app/content/interfaces/modal.interface';
import { ModalService } from 'src/app/content/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    public modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
    }


}
