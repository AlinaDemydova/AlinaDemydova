import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { AccessoriseTemplate } from './accessorise-template';
import { ACCESSORISE } from './mock-accessorise';
import { AccessoriseService } from './accessorise.service';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  providers: [ProductPageComponent],
  selector: 'app-accessorise-page',
  templateUrl: './accessorise-page.component.html',
  styleUrls: ['./accessorise-page.component.scss']
})
export class AccessorisePageComponent implements OnInit {

  accessorises = ACCESSORISE;

  constructor(private route: ActivatedRoute,
    private accessoriseService: AccessoriseService,
    private router: Router,
    private productPageComponent: ProductPageComponent) { }

  ngOnInit() {
  }

  // public addToCartAccessorise(): void {
  //   this.productPageComponent.addToCart();
  // }
  
}
