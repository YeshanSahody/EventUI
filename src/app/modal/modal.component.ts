import { Component, Input, OnInit, TemplateRef, input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IEventModels } from '../models/eventRegistrationModels';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
  modalRef: BsModalRef = new BsModalRef();
  @Input() item: IEventModels | any;

  constructor (private modalService : BsModalService){}
  ngOnInit(): void { 
    console.log("Item: ", this.item)
  }

  openModal(template : TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  closeModal(){
    this.modalRef?.hide();
  }
}