import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/coin.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  coins: Coin[];

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService.getCoins()
      .subscribe(res => {
        this.coins = res.prices;
      });
  }

}
