import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HomeSectionComponent } from "../home-section/home-section.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { ParallaxSectionComponent } from "../parallax-section/parallax-section.component";
import { OptionsSectionComponent } from "../options-section/options-section.component";
import { ProjectsSectionComponent } from "../projects-section/projects-section.component";
import { FeedbackSectionComponent } from "../feedback-section/feedback-section.component";
import { ClienstSectionComponent } from "../clients-section/clients-section.component";

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, HomeSectionComponent, HeroSectionComponent, ParallaxSectionComponent, OptionsSectionComponent, ProjectsSectionComponent, FeedbackSectionComponent, ClienstSectionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
