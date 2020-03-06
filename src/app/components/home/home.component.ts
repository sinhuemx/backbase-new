import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imageExchange = '../../../assets/icons/exchange.png';
  public imageSuitCase = '../../../assets/icons/suitcase.png';
  constructor() { }

  ngOnInit(): void {
  }


}
