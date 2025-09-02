import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HomeSectionComponent } from "../home-section/home-section.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { ParallaxSectionComponent } from "../parallax-section/parallax-section.component";

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, HomeSectionComponent, HeroSectionComponent, ParallaxSectionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
