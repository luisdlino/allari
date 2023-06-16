import { Component, Input, OnInit } from "@angular/core";
import { Slide } from "./carousel.interface";
import { trigger, transition, useAnimation } from "@angular/animations";

import {
  fadeIn,
  fadeOut,
} from "./carousel.animations";

@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger("slideAnimation", [
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),
    ])
  ]
})
export class CarouselComponent {
  @Input() slides: Slide[] = [
    {
      src: "assets/images/rio.jpg"
    },
    {
      src: "assets/images/buenos-aires.jpg"
    },
    {
      src: "assets/images/london.jpg"
    },
    {
      src: "assets/images/newyork.jpg"
    },
    {
      src: "assets/images/egypt.jpg"
    }
  ];

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  selectClick(index: number) {
    this.currentSlide = index;
  }
}
