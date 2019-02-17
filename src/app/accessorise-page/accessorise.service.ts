
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { AccessoriseTemplate } from './accessorise-template';
import { ACCESSORISE } from './mock-accessorise';
 
@Injectable({providedIn: 'root'})
export class accessoriseService {

  constuctor(){}

  getAccessorise(id: number): Observable<AccessoriseTemplate> {
    //   if (id < 200) {
    //     return of(ACCESSORISE.filter(forBuggyXs == true).find(accessorise => accessorise.id === id));
    //   }
    return of(ACCESSORISE.find(accessorise => accessorise.id === id));
  }

}
