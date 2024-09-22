import { Component, inject, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { injectStripe, StripeCardComponent } from 'ngx-stripe';
import { PaymentService } from './../../services/payment.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  @ViewChild(StripeCardComponent) cardElement!: StripeCardComponent;

  isSuccessPayment: boolean = false;

  private readonly fb = inject(UntypedFormBuilder);

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  checkoutForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  // Replace with your own public key
  stripe = injectStripe(
    'pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'
  );
  pageid: string = '';
  listroomdetails: any;
  price: any;

  constructor(
    private paymentService: PaymentService,
    private messageService: MessageService,
    private _ActivatedRoute: ActivatedRoute,
    private _LandingService: LandingService
  ) {
    this.pageid = this._ActivatedRoute.snapshot.params['id'];
    this.getroomdetails(this.pageid);
  }

  createToken() {
    // const name = this.stripeTest.get('name').value;
    const name = 'ola';
    this.stripe
      .createToken(this.cardElement.element, { name })
      .subscribe((result) => {
        if (result.token) {
          console.log(result.token.id);
          this.paymentService.payment(result.token.id).subscribe({
            next: (res) => {
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: res.message,
              });

              this.isSuccessPayment = true;
            },
          });
        } else if (result.error) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: result.error.message,
          });
        }
      });
  }
  getroomdetails(id: string) {
    this._LandingService.getRoomDetails(id).subscribe({
      next: (res) => {
        this.listroomdetails = res;
        this.price = this.listroomdetails.data.room.price;
        console.log(this.price);
      },
    });
  }
}
