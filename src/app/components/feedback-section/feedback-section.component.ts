import { Component, OnInit, OnDestroy } from '@angular/core';

interface Feedback {
  text: string
  name: string;
  image: string
}

@Component({
  selector: 'app-feedback-section',
  imports: [],
  templateUrl: './feedback-section.component.html',
  styleUrl: './feedback-section.component.css'
})
export class FeedbackSectionComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  fadeState = 'visible';
  autoSlideInterval: any;

  feedbacks: Feedback[] = [
    {
      text: "Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus dictum, augue tortor dictum ipsum, nec congue arcu lorem in nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius viverra ex, in venenatis magna ornare sit amet. Integer varius sit amet turpis eu ullamcorper.",
      name: "Aigars Silkalns",
      image: "/assets/images/consumer.png"
    },
    {
      text: "Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante.",
      name: "John Doe",
      image: "/assets/images/consumer2.png"
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.fadeState = 'fading';

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.feedbacks.length;
      this.fadeState = 'visible';
    }, 500);
  }

  prevSlide() {
    this.fadeState = 'fading';

    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
      this.fadeState = 'visible';
    }, 500);
  }

  goToSlide(index: number) {
    this.fadeState = 'fading';

    setTimeout(() => {
      this.currentIndex = index;
      this.fadeState = 'visible';
    }, 500);
  }
}
