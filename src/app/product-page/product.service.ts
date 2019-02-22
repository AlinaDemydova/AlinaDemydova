

import { Injectable } from "@angular/core";
import { Observable, of, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductTemplate } from './product-template';
import { ALLBUGGYS } from './mock-product';
import { SectionPageComponent } from '../section-page/section-page.component';
import { ACCESSORISE } from '../accessorise-page/mock-accessorise';
import { AccessoriseTemplate } from '../accessorise-page/accessorise-template';

@Injectable({providedIn: 'root'})
export class productService {
// techBuggyXs = TECHBUGGYXS;
currentBuggy: ProductTemplate;

checkBuggy: boolean;
stroller: boolean;

cartSubject = new Subject<boolean>();

  constuctor(){}

  getProduct(id: number): Observable<ProductTemplate> {
    //console.log(id);
    return of(ALLBUGGYS.find(x => x.id === id));   
  }

  getAccessoriseXS(): Observable<AccessoriseTemplate[]> {
    return of(ACCESSORISE.filter(x=> x.forBuggyXs));
  }
  getAccessoriseHarvey(): Observable<AccessoriseTemplate[]> {
    return of(ACCESSORISE.filter(x=> x.forHarvey));
  }
  getAccessoriseBuggyMini(): Observable<AccessoriseTemplate[]> {
    return of(ACCESSORISE.filter(x=> x.forBuggyMini));
  }
  getAccessoriseCharley(): Observable<AccessoriseTemplate[]> {
    return of(ACCESSORISE.filter(x=> x.forCharleyMini));
  }
  
  // getAccessoriseForAll(): Observable<AccessoriseTemplate[]> {
  //   if (this.currentBuggy.sectionId == 1) {
  //     return of(ACCESSORISE.filter(x=> x.forBuggyXs));
  //   } else {
  //     return of(ACCESSORISE.filter(x=> x.forHarvey));
  //   }
    
  // }

}
