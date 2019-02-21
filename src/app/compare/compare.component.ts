import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALLBUGGYS } from '../product-page/mock-product';
// import { ProductTemplate } from '../'

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  productsInCompare = ALLBUGGYS;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
