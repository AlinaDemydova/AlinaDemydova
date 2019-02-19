import { Component, OnInit } from '@angular/core';
import { ALLBUGGYS } from '../product-page/mock-product';
import { ProductTemplate } from '../product-page/product-template';
import { chooseService } from '../choose-buggy/choose.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-choose-buggy',
  templateUrl: './choose-buggy.component.html',
  styleUrls: ['./choose-buggy.component.scss']
})
export class ChooseBuggyComponent implements OnInit {
//choose : ProductTemplate[];
choosedBuggy = ALLBUGGYS;

sortByStroller: string;
sortByBuggy: string;
sortByGirl: string;
sortByBoy: string;
sortByUnisex: string;
sort: any;

  constructor(
    private chooseService: chooseService
  ) { }

  ngOnInit() {
    this.sortedProducts();

    // запуск sortedProducts() по кожному кліку на чекбокс
  }

  sortedProducts() {
     if(this.sortByStroller && !this.sortByBuggy) {
       if(!this.sortByGirl || !this.sortByBoy || !this.sortByUnisex) {
        this.chooseService.sortedByStroller(this.sortByStroller).subscribe(choosedBuggy => this.choosedBuggy = choosedBuggy);
       }
      if(this.sortByGirl || this.sortByBoy || this.sortByUnisex) {
        if(this.sortByGirl && !this.sortByBoy && !this.sortByUnisex) {
          this.sort = this.chooseService.sortedByStroller(this.sortByStroller).subscribe(choosedBuggy => this.choosedBuggy = choosedBuggy);//сортування по типу stroller
          this.chooseService.sortedByGirl(this.sort).subscribe(choosedBuggy => this.choosedBuggy = choosedBuggy); //сортування по статі girl
        }
      }
    } else if(!this.sortByStroller && this.sortByBuggy) {
      this.chooseService.sortedByBuggy(this.sortByBuggy).subscribe(choosedBuggy => this.choosedBuggy = choosedBuggy);
    }

    // else {
    //   this.chooseService.getStroller().subscribe(choosedBuggy => this.choosedBuggy = choosedBuggy);
    // }

  }
  // sortedByStroller()
  // sortedByBuggy()

}

// Якщо stroller==true, то сортування по 

// if (stroller == checked) {
//   listStroller = список, відсортований по типу "stroller";
//     if(boy==checked || girl==checked || all==checked) {
//       if(boy==checked) {
//         return listStroller, відсортований по типу "boy"
//       } else if (girl==checked) {
//         return listStroller, відсортований по типу "girl"
//       } else if (all==checked) {
//         return listStroller, відсортований по типу "all"
//       } else if (boy==checked && girl==checked) {
//         return listStroller, відсортований по типу "boy" і "girl"
//       } else if (girl==checked && all==checked) {
//         return listStroller, відсортований по типу "girl" і "all"
//       } else if (boy==checked && all==checked) {
//         return listStroller, відсортований по типу "boy" і "all"
//       } else if (boy==checked && girl==checked && all==checked) {
//         return список, відсортований по "stroller";
//       }
//     } else {
//       return список, відсортований по "stroller";
//     }

// } else if (buggy == checked) {

// } else if (stroller == checked && buggy == checked) {
//   return весь список;
// } else {
//   document.write('Виберіть параметри для сотрування');
// } 