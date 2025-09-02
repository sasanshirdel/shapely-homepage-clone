import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent {

  projectGallaryImages = [
    { id: 1, imgUrl: "assets/images/projects/1.png" },
    { id: 2, imgUrl: "assets/images/projects/2.png" },
    { id: 3, imgUrl: "assets/images/projects/3.png" },
    { id: 4, imgUrl: "assets/images/projects/4.png" },
    { id: 5, imgUrl: "assets/images/projects/5.png" },
    { id: 6, imgUrl: "assets/images/projects/6.png" },
    { id: 7, imgUrl: "assets/images/projects/7.png" },
    { id: 8, imgUrl: "assets/images/projects/8.png" },
    { id: 9, imgUrl: "assets/images/projects/9.png" },
    { id: 10, imgUrl: "assets/images/projects/10.png" },
  ]

}
