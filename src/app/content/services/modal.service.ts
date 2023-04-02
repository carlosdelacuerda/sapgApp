import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { DialogData } from '../interfaces/modal.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public subjectModal: BehaviorSubject<DialogData>  = new BehaviorSubject({
    title: '',
    component: ''
  });

  constructor() { }

  public openModal(content: DialogData): Observable<any> { 
    this.subjectModal.next(content);
    return null as any;
  }
}
