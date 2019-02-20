import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productService } from './product.service';
import { ProductTemplate } from './product-template';
import { ALLBUGGYS } from './mock-product';
import { ACCESSORISE } from '../accessorise-page/mock-accessorise';
import { Location } from '@angular/common';
import { AccessoriseTemplate } from '../accessorise-page/accessorise-template';
import { CartPageComponent } from '../cart-page/cart-page.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

accessorises = ACCESSORISE;
currentBuggy: ProductTemplate;

  constructor(
    private productService: productService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getAccessorise();

    this.route.params.subscribe(params=> {
      this.getProduct(params['id']);
    });
  }

  getProduct(idParam?: string): void {
    const id = idParam ? +idParam : +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(product => this.currentBuggy = product);
  }

  addToCart() {
    let str = JSON.stringify(this.currentBuggy);//Превращаем в строку (сериализуем его
    localStorage.setItem('obj', str);//Запишем в localStorage с ключом obj:
    console.log(localStorage);
    location.replace('cart');
    console.log(localStorage);
  }
  
  // getAccessorise(): void {
  //   // const id = idParam ? +idParam : +this.route.snapshot.paramMap.get('id');
  //   // console.log(id);
  //   // console.log(this.currentBuggy.sectionId);
  //   this.productService.getAccessorise().subscribe(accessorises =>{ this.accessorises = accessorises; console.log(this.accessorises)});
  // }
  getAccessorise(): void {
    if(this.currentBuggy.sectionId == 1 || this.currentBuggy.sectionId == 2 || this.currentBuggy.sectionId == 3) {
      this.productService.getAccessoriseXS().subscribe(accessorises =>{ this.accessorises = accessorises; console.log(this.accessorises)});
    } else if (this.currentBuggy.sectionId == 4) {
      this.productService.getAccessoriseBuggyMini().subscribe(accessorises =>{ this.accessorises = accessorises; console.log(this.accessorises)});
    } else if (this.currentBuggy.sectionId == 5) {
      this.productService.getAccessoriseHarvey().subscribe(accessorises =>{ this.accessorises = accessorises; console.log(this.accessorises)});
    }  else if (this.currentBuggy.sectionId == 6) {
      this.productService.getAccessoriseCharley().subscribe(accessorises =>{ this.accessorises = accessorises; console.log(this.accessorises)});
    } else {
      this.productService.getAccessoriseBuggyMini().subscribe(accessorises =>{ this.accessorises = accessorises; console.log(this.accessorises)});
    }
  }
  

}
