import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.scss']
})
export class LeftContentComponent {

  constructor() {}

  mouseX = 0;
  mouseY = 0


  @HostListener('window:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    this.mouseX = event?.clientX;
    this.mouseY =event?.clientY;
  }
}
