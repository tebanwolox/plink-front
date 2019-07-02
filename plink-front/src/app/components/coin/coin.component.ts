import { ConvertService } from './../../services/convert.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  @Input() coin: Coin;

  crypto: boolean;

  constructor(private convertService: ConvertService) { }

  ngOnInit() {
    this.crypto = this.coin.crypto === '1';
  }

  convert() {
    this.convertService.changeMessage(this.coin.id_currency);
  }

}
