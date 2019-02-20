import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ALLBUGGYS } from '../product-page/mock-product';
import { stringify } from '@angular/core/src/render3/util';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ProductTemplate } from '../product-page/product-template';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  modalRef: BsModalRef;
  public loginForm: FormGroup;

  productsInCart = ALLBUGGYS;
  sum = 0;
  
  // USER: {
  //   name: string;
  //   sname: string;
  //  onLesson: boolean;
  // } = {
  //  name: 'o',
  //  sname: 'B',
  //  onLesson: true
  // }

  constructor(private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {

    this.productsInCart.push(JSON.parse(localStorage.getItem('obj')));
console.log(this.productsInCart);

    // if (!this.loginForm) {
    //   this.loginForm = this.formBuilder.group({
    //     'UserName': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
    //     'Password': new FormControl('', [Validators.required])
    //   });
    // }

  }
  deleteProduct(itemInCart){
    // this.productsInCart = this.productsInCart.filter(x => x != itemInCart)
    localStorage.removeItem('obj');
  }
  calculateTotal(){
    this.sum = 0;
    //this.productsInCart.map(x=> this.sum += x.price * x.quantity); // change to reduce
    // this.total += this.arr.reduce(x => 0 + x.price * x.quantity);
  }
  makeOrder(){
    //location.replace('order');
  }
  // clearCart() {
  //   this.productsInCart = localStorage.clear();
  // }

  // submit_function() {
  //   alert(this.USER);
  // }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
