import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoinService } from './../../services/coin.service';
import { fromEvent } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import {
  debounceTime,
  map
} from 'rxjs/operators';
import { _countGroupLabelsBeforeOption } from '@angular/material';


@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {

  @Input() coins: Coin[];
  @ViewChild('qlt') qlt: ElementRef;

  rForm: FormGroup;
  from = 'BTC';
  to = 'USD';
  quantity = 0;
  changeValue = '0';

  constructor(
    private fb: FormBuilder,
    private coinService: CoinService
  ) {
    this.rForm = this.fb.group({
      amount: ['', Validators.compose([Validators.required, Validators.min(0)])],
      from: ['', Validators.compose([Validators.required])],
      to: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.coins.push({
      id_currency: 'BTC',
      name: 'Bitcoin',
      price: '1',
      crypto: '1'
    });
    this.coins.sort();

    fromEvent(this.qlt.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , debounceTime(1000)
      ).subscribe((amount: number) => {
        this.convert(amount, this.rForm.get('from').value, this.rForm.get('to').value);
      });
  }

  convert(amount: number, from: string, to: string) {
    this.coinService.convert(amount, from, to)
      .subscribe(res => {
        if (res.success) {
          this.quantity = res.to_quantity;
        }
      });
  }

   changeConvertion() {
    const amount = this.rForm.get('amount').value;
    const from = this.from;
    const to = this.to;
    this.rForm.get('from').setValue(to);
    this.rForm.get('to').setValue(from);
    this.convert(amount, to, from);
  }

  convertValues() {
    const amount = this.rForm.get('amount').value;
    const from = this.rForm.get('from').value;
    const to = this.rForm.get('to').value;
    this.convert(amount, from, to);
  }

  currency() {
    this.changeValue = this.changeValue.split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );

  }
}
