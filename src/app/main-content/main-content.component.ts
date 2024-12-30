import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
  standalone: true
})
export class MainContentComponent {
  xCenter = window.innerWidth / 2;
  start = { x: this.xCenter, y: 100 };

  keywords = [
    { text: 'prerequisite', x: this.xCenter - 30, y: 100 },
    { text: 'HTML', x: 400, y: 200 },
    { text: 'CSS', x: 400, y: 200 },
    { text: 'Javascript', x: 600, y: 200 },
    { text: 'Typescript', x: 400, y: 200 },
    { text: 'Git', x: 400, y: 200 },
    { text: 'NodeJS', x: 600, y: 200 },
    { text: 'SOLID', x: 600, y: 200 }
  ];

  constructor() {
    for (let i = 1; i < this.keywords.length; i++) {
      this.keywords[i].x = window.innerWidth / (this.keywords.length + 1) * (i + 1);
    }
  }

  // Berechnung des Pfads für eine Bézier-Kurve
  calculatePath(end: { x: number; y: number }): string {
    const start = this.start;
    const controlX1 = (start.x + end.x) / 2;
    const controlY1 = start.y;
    const controlX2 = (start.x + end.x) / 2;
    const controlY2 = end.y - 100;

    return `M ${start.x} ${start.y}
            C ${controlX1} ${controlY1},
              ${controlX2} ${controlY2},
              ${end.x} ${end.y}`;
  }
}
