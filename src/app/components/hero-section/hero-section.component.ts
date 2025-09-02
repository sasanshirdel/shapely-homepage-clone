import { Component, input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

interface imgProps {
  imgUrl: string
  imgAlt: string
}

@Component({
  selector: 'app-hero-section',
  imports: [ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  imgProps = input.required<imgProps>();
  heroTitle = input.required<string>();
  heroDes = input.required<string>();

  // styles
  direction = input<'row' | 'row-reverse' | 'column' | 'column-reverse'>("row");
  bgColor = input<string>("")
}
