

import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductTemplate } from './product-template';
import { ALLBUGGYS } from './mock-product';
import { SectionPageComponent } from '../section-page/section-page.component';
import { ACCESSORISE } from '../accessorise-page/mock-accessorise';
import { AccessoriseTemplate } from '../accessorise-page/accessorise-template';
import { TECHBUGGYXS } from '../product-page/mock-tech-product';

@Injectable({providedIn: 'root'})
export class productService {
techBuggyXs = TECHBUGGYXS;
  constuctor(){}

  getProduct(id: number): Observable<ProductTemplate> {
    //console.log(id);
    return of(ALLBUGGYS.find(x => x.id === id));   
  }

  getAccessorise(): Observable<AccessoriseTemplate[]> {
    return of(ACCESSORISE.filter(x=> x.forBuggyXs));
  }

}
