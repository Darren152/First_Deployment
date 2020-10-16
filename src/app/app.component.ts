import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Discount Calculator';

  discountAmount;
  finalPrice;

  calculate(price, discount){
    this.discountAmount = (discount / 100 );
    
    this.discountAmount = price * this.discountAmount

    this.finalPrice = price - this.discountAmount;

    return this.finalPrice;

  }

}
