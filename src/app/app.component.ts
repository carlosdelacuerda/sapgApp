import { Component, OnInit } from '@angular/core';
import { LoadingInterceptor } from './content/interceptors/loading.interceptor';
import { ModalComponent } from './content/components/_shared/modal/modal.component';
import { Observable } from 'rxjs';
import { DialogData } from './content/interfaces/modal.interface';
import { ModalService } from './content/services/modal.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sapg';
  showLoading: boolean = false;
  modal$: Observable<DialogData> = this.modalService.subjectModal.asObservable();

  constructor(
    public loadingInterceptor: LoadingInterceptor,
    public modalService: ModalService,
    public dialog: MatDialog,
  ){}

  ngOnInit(): void {
    this.modal$.subscribe((data: DialogData) => this.openDialog(data))
    this.dialog.closeAll()
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
          this.loadingInterceptor.showLoading$.subscribe(state => this.showLoading = state)
    });
  }

  openDialog(data: DialogData): void {
    this.dialog.open(ModalComponent, {
      width: '500px',
      height: '500px',
      data: {title: data.title, component: data.component}
    });
  }
}
