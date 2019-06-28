import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  @Input() coin: Coin;

  crypto: boolean;

  constructor() { }

  ngOnInit() {
    this.crypto = this.coin.crypto === '1';
  }

}
