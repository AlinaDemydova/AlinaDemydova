import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  public loginForm: FormGroup;

  USER: {
    name: string;
    sname: string;
   onLesson: boolean;
  } = {
   name: 'o',
   sname: 'B',
   onLesson: true
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (!this.loginForm) {
      this.loginForm = this.formBuilder.group({
        'UserName': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
        'Password': new FormControl('', [Validators.required])
      });
    }
  }

  submit_function() {
    alert(this.USER);
  }

}
