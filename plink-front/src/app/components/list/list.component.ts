import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() coins: Coin[];

  increaseSize = 20;
  currentMax = 20;
  visibleCoins: Coin[];
  throttle = 600;
  scrollDistance = 3;

  constructor() { }

  ngOnInit() {
    this.visibleCoins = this.coins.slice(0, this.currentMax);
  }

  onScrollDown() {
    this.visibleCoins = this.visibleCoins.concat(this.coins.slice(this.currentMax, this.currentMax + this.increaseSize));
    this.currentMax += this.increaseSize;
  }
}
