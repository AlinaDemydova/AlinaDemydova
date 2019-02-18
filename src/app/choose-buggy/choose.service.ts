import { Injectable } from "@angular/core";
import { Component, OnInit } from '@angular/core';
import { ALLBUGGYS } from '../product-page/mock-product';
import { Observable, of } from 'rxjs';
import { ProductTemplate } from '../product-page/product-template';
import { FormsModule } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class chooseService {
    sortByStroller;
    sortByBuggy;
    sortByGirl;
    sortByBoy;
    sortByUnisex;

    constuctor(){}

    getStroller(type: string): Observable<ProductTemplate[]> {
        return of(ALLBUGGYS.filter(x => x.type === type));
    }
    sortedProducts(type: string): Observable<ProductTemplate[]> {
        return of(ALLBUGGYS.filter(x => x.type === type));
    }


}