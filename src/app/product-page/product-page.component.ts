import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productService } from './product.service';
import { ProductTemplate } from './product-template';
import { ALLBUGGYS } from './mock-product';
import { ACCESSORISE } from '../accessorise-page/mock-accessorise';
import { Location } from '@angular/common';
import { AccessoriseTemplate } from '../accessorise-page/accessorise-template';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

accessorises = ACCESSORISE;
currentBuggy: ProductTemplate;
buttonDisabled: boolean;

  constructor(
    private _productService: productService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buttonDisabled = false;
    this.getProduct();
    this.getAccessorise();
    //localStorage.clear();
    this.route.params.subscribe(params=> {
      this.getProduct(params['id']);
    });
  }

  getProduct(idParam?: string): void {
    const id = idParam ? +idParam : +this.route.snapshot.paramMap.get('id');
    this._productService.getProduct(id).subscribe(product => this.currentBuggy = product);
  }

  addToCart() {
    const arr = JSON.parse(localStorage.getItem('obj'));
    if(arr) {
      arr.push(this.currentBuggy);
      localStorage.setItem('obj', JSON.stringify(arr));
    } else {
      localStorage.setItem('obj', JSON.stringify([this.currentBuggy]));
    }
    this._productService.cartSubject.next(true);
    this.router.navigateByUrl('/cart');
    // console.log(localStorage.getItem('obj'));
  }
  addToCompare() {
    const arrCompare = JSON.parse(localStorage.getItem('objToCompare'));
    if(arrCompare) {
      arrCompare.push(this.currentBuggy);
      localStorage.setItem('objToCompare', JSON.stringify(arrCompare));
    } else {
      localStorage.setItem('objToCompare', JSON.stringify([this.currentBuggy]));
    }
    this.router.navigateByUrl('/compare');
    this.buttonDisabled = true;
  }
  // getAccessorise(): void {
  //   // const id = idParam ? +idParam : +this.route.snapshot.paramMap.get('id');
  //   // console.log(id);
  //   // console.log(this.currentBuggy.sectionId);
  //   this.productService.getAccessorise().subscribe(accessorises =>{ this.accessorises = accessorises; console.log(this.accessorises)});
  // }
  getAccessorise(): void {
    if(this.currentBuggy.sectionId == 1 || this.currentBuggy.sectionId == 2 || this.currentBuggy.sectionId == 3) {
      this._productService.getAccessoriseXS().subscribe(accessorises =>{ this.accessorises = accessorises; });
    } else if (this.currentBuggy.sectionId == 4) {
      this._productService.getAccessoriseBuggyMini().subscribe(accessorises =>{ this.accessorises = accessorises; });
    } else if (this.currentBuggy.sectionId == 5) {
      this._productService.getAccessoriseHarvey().subscribe(accessorises =>{ this.accessorises = accessorises; });
    }  else if (this.currentBuggy.sectionId == 6) {
      this._productService.getAccessoriseCharley().subscribe(accessorises =>{ this.accessorises = accessorises; });
    } else {
      this._productService.getAccessoriseBuggyMini().subscribe(accessorises =>{ this.accessorises = accessorises; });
    }
  }
  

}
