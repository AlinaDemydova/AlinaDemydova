import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ALLBUGGYS } from '../product-page/mock-product';
import { stringify } from '@angular/core/src/render3/util';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ProductTemplate } from '../product-page/product-template';
import { productService } from '../product-page/product.service';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  modalRef: BsModalRef;
  public loginForm: FormGroup;

  productsInCart: ProductTemplate[];
  firstTotal: number;
  total: number;
   
  constructor(private formBuilder: FormBuilder,
    private _productService: productService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    this.productsInCart = JSON.parse(localStorage.getItem('obj'));
    this.calculateTotal();

    this.productsInCart.forEach(x=> {
      x.totalItem = x.price * x.quantity;
    });// винестив окрему функцію
  }

  calculateTotal(){
    this.total = 0;

    this.productsInCart.map(x=>{ this.total += x.price * x.quantity;
    console.log(x.price, x.quantity, this.total)});
  }

  calculateTotalItem(id: number){
    const result = this.productsInCart.find(x=> x.id === id);
    if(result){
      result.totalItem = result.price * result.quantity;
     // this.quantity = result.quantity;
    } 
    //localStorage.setItem()this.productsInCart
    this._productService.cartSubject.next(true);
  }

  deleteProduct(id: number){
    // this.productsInCart = this.productsInCart.filter(x => x != itemInCart)
    this.productsInCart = JSON.parse(localStorage.getItem('obj'));
    this.productsInCart = this.productsInCart.filter(x=> x.id !== id);

    localStorage.setItem('obj', JSON.stringify(this.productsInCart));
    this._productService.cartSubject.next(true);
    this.total = 0;
    //this.calculateTotal();
  }

  // makeOrder(){
  //   //this.router.navigateByUrl('/order');
  // }
  // clearCart() {
  //   this.productsInCart = localStorage.clear();
  // }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
