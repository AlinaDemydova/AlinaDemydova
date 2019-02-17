import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productService } from './product.service';
import { ProductTemplate } from './product-template';
import { ALLBUGGYS } from './mock-product';
import { ACCESSORISE } from '../accessorise-page/mock-accessorise';
import { AccessoriseTemplate } from '../accessorise-page/accessorise-template';
import { TECHBUGGYXS } from './mock-tech-product';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
//allBuggys : ProductTemplate;
//accessorises : AccessoriseTemplate[];
accessorises = ACCESSORISE;
// allBuggys: ProductTemplate[] = ALLBUGGYS;
currentBuggy: ProductTemplate;
// buggys = DISNEYXS;

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
  getAccessorise(idParam?: string): void {
    const id = idParam ? +idParam : +this.route.snapshot.paramMap.get('id');
    this.productService.getAccessorise().subscribe(accessorises =>{ this.accessorises = accessorises; console.log(this.accessorises)});
  }
}
