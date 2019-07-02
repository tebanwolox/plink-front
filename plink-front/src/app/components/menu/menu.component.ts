import { ConvertService } from './../../services/convert.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CoinService } from './../../services/coin.service';
import { MatCardXlImage } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup;

  coins: Coin[];
  tabIndex = new FormControl();

  constructor(
    private coinService: CoinService,
    private convertService: ConvertService) { }

  ngOnInit() {
    this.coinService.getCoins()
      .subscribe(res => {
        this.coins = res.prices;
      });

    this.convertService.changeConvert.subscribe(res => {
      this.tabIndex.setValue(0);
    });

  }

}
