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



  public bannerText = {
    title:"EVERY CHILD SHOULD GROW UP IN A BETTER WORLD",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n" +
    "              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n" +
    "              of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n" +
    "              but also the leap into electronic typesetting, remaining"
  };

  public sidebarContent = {
    leftSidebar:{
      video:'assets/educationalvideo.mp4'
    },
    rightSidebar:{
      title:'Learn more about out mission and our commitment to a better future for our children '
    }
  };


  public quotes = {
    title: `“The only way that we reach out full human potential is if we’re able to unlock the gifts of
              every person around the world.”`,
    author:`-Omar Faroque and Asma Omar`
  };

  public contact = {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n" +
    "              the industry's standard dummy text ever since the 1500s,"
  };

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
