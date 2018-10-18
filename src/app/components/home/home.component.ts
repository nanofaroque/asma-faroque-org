import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  public sliderArray = [
    {img: 'assets/images/slide1.png', alt: '', text: 'Together we can build the Earth'},
    {img: 'assets/images/slide2.png', alt: '',  text: 'Together we can build the Earth'},
    {img: 'assets/images/slide3.png', alt: '', text: 'Together we can build the Earth'},
    {img: 'assets/images/slide4.png', alt: '',  text: 'Together we can build the Earth'},
    {img: 'assets/images/slide5.png', alt: '', text: 'Together we can build the Earth'}
  ];
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }
}
