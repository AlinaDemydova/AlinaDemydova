import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessoriseTemplate } from './accessorise-template';
import { ACCESSORISE } from './mock-accessorise';
import { accessoriseService } from './accessorise.service';

@Component({
  selector: 'app-accessorise-page',
  templateUrl: './accessorise-page.component.html',
  styleUrls: ['./accessorise-page.component.scss']
})
export class AccessorisePageComponent implements OnInit {

  accessorises = ACCESSORISE;

  constructor(private route: ActivatedRoute,
    private accessoriseService: accessoriseService) { }

  ngOnInit() {
  }

}
