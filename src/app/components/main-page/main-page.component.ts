import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HomeSectionComponent } from "../home-section/home-section.component";

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, HomeSectionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
