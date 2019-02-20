import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SECTION } from '../app/section-page/mock-section';
import { SectionTemplate } from './section-page/section-template';
import { SectionPageComponent } from './section-page/section-page.component';
import { sectionService } from './section-page/section.service';
import { AppService } from './app.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
// implements OnInit 
{
  title = 'NewProjectEasywalker';
  buggySection = SECTION;
  strollerSection = SECTION;
  modalRef: BsModalRef;
  sections: SectionTemplate;  

  currentPage: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private modalService: BsModalService,
    private sectionService: sectionService,
    private AppService: AppService,) { }

    ngOnInit(): void {
      this.getSectionBuggy();
      this.getSectionStroller();
      // this.getActive();
      // this.route.params.subscribe((params) => {console.log(params['id'])});


      this.activeMenu();
      this.router.events.subscribe((val) => { this.activeMenu() });
    }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  getSectionBuggy(): void {
    this.AppService.getSectionBuggy().subscribe(buggySection => this.buggySection = buggySection);
  }
  getSectionStroller(): void {
    this.AppService.getSectionStroller().subscribe(strollerSection => this.strollerSection = strollerSection);
  }

  activeMenu(): void {
    if (this.router.url.includes('/5')) {
      this.currentPage = 'stroller';
    } else if (this.router.url.includes('/6')) {
      this.currentPage = 'stroller';
    } else if (this.router.url.includes('/1')) {
      this.currentPage = 'buggy';
    } else if (this.router.url.includes('/2')) {
      this.currentPage = 'buggy';
    } else if (this.router.url.includes('/3')) {
      this.currentPage = 'buggy';
    } else if (this.router.url.includes('/accessorise')) {
      this.currentPage = 'accessorise';
    } else if (this.router.url.includes('/cart')) {
      this.currentPage = 'cart';
    } else {
      this.currentPage = 'main';
    }
    //console.log(this.router.url)
  }
 
}

