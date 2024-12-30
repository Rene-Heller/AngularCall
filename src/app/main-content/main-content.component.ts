import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  keywords = [
    { text: 'Form', x: 200, y: 100 },
    { text: 'Reactive', x: 400, y: 200 },
    { text: 'Template Driven', x: 400, y: 300 },
    { text: 'Usage', x: 600, y: 250 }
  ];

  // Berechnung des Pfads für eine Bézier-Kurve
  calculatePath(start: { x: number; y: number }, end: { x: number; y: number }): string {
    const controlX1 = (start.x + end.x) / 2;
    const controlY1 = start.y - 50;
    const controlX2 = (start.x + end.x) / 2;
    const controlY2 = end.y + 50;

    return `M ${start.x} ${start.y}
            C ${controlX1} ${controlY1},
              ${controlX2} ${controlY2},
              ${end.x} ${end.y}`;
  }
}
