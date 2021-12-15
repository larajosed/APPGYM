import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  title: String;
  content: String;

  constructor(private ngbActiveModal: NgbActiveModal) {
    this.title = '';
    this.content = '';
  }

  ngOnInit(): void {
  }

  dismiss(): void {
    this.ngbActiveModal.close()
  }

}
