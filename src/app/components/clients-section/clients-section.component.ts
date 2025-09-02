import { NgFor } from '@angular/common';
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clienst-section',
  imports: [NgFor],
  templateUrl: './clients-section.component.html',
  styleUrl: './clients-section.component.css'
})
export class ClienstSectionComponent implements OnInit, OnDestroy {
  logos = [
    { id: 1, imgUrl: 'assets/images/logos/js-logo.png' },
    { id: 2, imgUrl: 'assets/images/logos/html5-logo.png' },
    { id: 3, imgUrl: 'assets/images/logos/css-logo.png' },
    { id: 4, imgUrl: 'assets/images/logos/less-logo.png' },
    { id: 5, imgUrl: 'assets/images/logos/bootstrap-logo.jpg' },
    { id: 6, imgUrl: 'assets/images/logos/adobe-logo.png' },
    { id: 7, imgUrl: 'assets/images/logos/facebook-logo.png' },
  ];

  index = 0;
  itemsPerView = 4;
  autoSlideInterval: any;

  ngOnInit() {
    this.calculateItemsPerView();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateItemsPerView();
  }

  calculateItemsPerView() {
    const width = window.innerWidth;

    if (width < 576) {
      this.itemsPerView = 2;
    } else if (width < 768) {
      this.itemsPerView = 3;
    } else {
      this.itemsPerView = 4;
    }

    const maxIndex = Math.max(0, this.logos.length - this.itemsPerView);
    if (this.index > maxIndex) {
      this.index = maxIndex;
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    const maxIndex = Math.max(0, this.logos.length - this.itemsPerView);
    this.index = this.index >= maxIndex ? 0 : this.index + 1;
  }

  prevSlide() {
    const maxIndex = Math.max(0, this.logos.length - this.itemsPerView);
    this.index = this.index <= 0 ? maxIndex : this.index - 1;
  }

  goToSlide(i: number) {
    this.index = i;
  }
}
