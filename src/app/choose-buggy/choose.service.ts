import { Injectable } from "@angular/core";
import { Component, OnInit } from '@angular/core';
import { ALLBUGGYS } from '../product-page/mock-product';
import { Observable, of } from 'rxjs';
import { ProductTemplate } from '../product-page/product-template';
import { FormsModule } from '@angular/forms';
import { ChooseBuggyComponent } from './choose-buggy.component';

@Injectable({providedIn: 'root'})

export class chooseService {
    // sortByStroller;
    // sortByBuggy;
    // sortByGirl;
    // sortByBoy;
    // sortByUnisex;

    constuctor(){}

    // getStroller(type: string): Observable<ProductTemplate[]> {
    //     return of(ALLBUGGYS.filter(x => x.type === type));
    // }

    sortedByStroller(type: string): Observable<ProductTemplate[]> {
        return of(ALLBUGGYS.filter(x => x.type === 'stroller'));
    }
    sortedByBuggy(type: string): Observable<ProductTemplate[]> {
        return of(ALLBUGGYS.filter(x => x.type === 'buggy'));
    }
    sortedByGirl(type: string): Observable<ProductTemplate[]> {
        return of(ALLBUGGYS.filter(x => x.sex === 'girl'));
    }
    sortedByBoy(type: string): Observable<ProductTemplate[]> {
        return of(ALLBUGGYS.filter(x => x.sex === 'boy'));
    }
    sortedByUnisex(type: string): Observable<ProductTemplate[]> {
        return of(ALLBUGGYS.filter(x => x.sex === 'all'));
    }
    

}