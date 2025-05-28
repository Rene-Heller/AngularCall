import { Component, inject, Input } from '@angular/core';
import { CardContainerComponent } from '../component-example/card-container/card-container.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CardContainerComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  // @Input() items: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // myService = inject(MyServiceService);
  // example: string = ""

  constructor() {
    // this.example = this.myService.returnNewString();1
  }

  // ngOnInit() {
  //   this.example = ""
  // }
}
