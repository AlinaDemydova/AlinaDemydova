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
  total: number;
  arr: ProductTemplate[];
  quantity = 1;
  
  constructor(private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {

    this.productsInCart.push(JSON.parse(localStorage.getItem('obj')));
    console.log(this.productsInCart);

  }
  plusOneItem() {
    console.log(this.quantity);
    this.quantity += 1;
    this.calculateTotal();
  }
  calculateTotal(){
   // this.total = this.quantity*this.productsInCart.price; //NaN
    this.productsInCart.map(x=> this.total += x.price * this.quantity);
    
  }
  deleteProduct(itemInCart){
    // this.productsInCart = this.productsInCart.filter(x => x != itemInCart)
    localStorage.removeItem('obj');
  }
  // makeOrder(){
  //   //location.replace('order');
  // }
  // clearCart() {
  //   this.productsInCart = localStorage.clear();
  // }

 

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
