import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALLBUGGYS } from '../product-page/mock-product';
import { ProductTemplate } from '../product-page/product-template';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  productsInCompare: ProductTemplate[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getItemToCompare();
  }


  getItemToCompare() {
    this.productsInCompare = JSON.parse(localStorage.getItem('objToCompare'));
    //localStorage.removeItem('toCompare');
  }
  deleteProduct(id: number){
    this.productsInCompare = JSON.parse(localStorage.getItem('objToCompare'));
    this.productsInCompare = this.productsInCompare.filter(x=> x.id !== id);
    localStorage.setItem('objToCompare', JSON.stringify(this.productsInCompare));  
  }

}
