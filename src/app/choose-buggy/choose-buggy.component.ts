import { Component, OnInit } from '@angular/core';
import { ALLBUGGYS } from '../product-page/mock-product';
import { ProductTemplate } from '../product-page/product-template';
import { chooseService } from '../choose-buggy/choose.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-choose-buggy',
  templateUrl: './choose-buggy.component.html',
  styleUrls: ['./choose-buggy.component.scss']
})
export class ChooseBuggyComponent implements OnInit {
//choose : ProductTemplate[];
choosedBuggy = ALLBUGGYS;

sortByStroller: ProductTemplate[];
sortByBuggy: ProductTemplate[];
sortByGirl: ProductTemplate[];
sortByBoy: ProductTemplate[];
sortByUnisex: ProductTemplate[];

  constructor(
    private chooseService: chooseService
  ) { }

  ngOnInit() {
  }

  sortedProducts() {

  }

    

}
