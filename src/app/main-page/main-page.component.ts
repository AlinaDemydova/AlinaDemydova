import { Component, OnInit, Input, TemplateRef } from '@angular/core';
// import { ModalCallComponent } from '../modal-call/modal-call.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChooseBuggyComponent } from '../choose-buggy/choose-buggy.component';
import { ALLBUGGYS } from '../product-page/mock-product';
import { ProductTemplate } from '../product-page/product-template';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  sortByBuggy: boolean;
  choosedBuggy: ProductTemplate[];
  // modalRef: BsModalRef;
  
  // constructor(private route: ActivatedRoute,
  //      private location: Location,
  //   private modalService: BsModalService) { }

  ngOnInit() {
    
  }
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
  filterBuggy() {
    location.replace('choose');
    //this.choosedBuggy = ALLBUGGYS.filter(x=> x.type === 'buggy');
   this.sortByBuggy = true;
  }

}
