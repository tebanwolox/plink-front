import { Component, OnInit } from '@angular/core';
import { CoinService } from './../../services/coin.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  coins: Coin[];

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService.getCoins()
      .subscribe(res => {
        this.coins = res.prices;
      });
  }

}
