import { Component, OnInit, Input, TemplateRef } from '@angular/core';
// import { ModalCallComponent } from '../modal-call/modal-call.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  // modalRef: BsModalRef;
  
  // constructor(private route: ActivatedRoute,
  //      private location: Location,
  //   private modalService: BsModalService) { }

  ngOnInit() {
    
  }
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }

}
