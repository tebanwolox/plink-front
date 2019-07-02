import { Component, OnInit, Input, HostListener } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() coins: Coin[];

  limit = 20;
  visibleCoins: Coin[];
  throttle = 600;
  scrollDistance = 3;

  constructor() { }

  ngOnInit() {
    this.visibleCoins = this.coins.slice(0, 20);
  }

  onScrollDown() {
    console.log('scrolllll');
  }
}
