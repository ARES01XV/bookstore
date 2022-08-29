import { Component, OnInit } from '@angular/core';

//paypal window
declare var paypal: any;
@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    paypal
      .Buttons({
        create_order: (data: any, actions: any) => {
          return actions.or
        }
      })
  }

}
