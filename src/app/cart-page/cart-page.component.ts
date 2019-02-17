import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  modalRef: BsModalRef;

  public loginForm: FormGroup;

  USER: {
    name: string;
    sname: string;
   onLesson: boolean;
  } = {
   name: 'o',
   sname: 'B',
   onLesson: true
  }

  constructor(private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    if (!this.loginForm) {
      this.loginForm = this.formBuilder.group({
        'UserName': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
        'Password': new FormControl('', [Validators.required])
      });
    }
  }

  submit_function() {
    alert(this.USER);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
