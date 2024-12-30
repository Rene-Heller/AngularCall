import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
    selector: 'app-landing-page',
    imports: [],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  @Input() items: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  myService = inject(MyServiceService);
  example: string=""

  constructor() {
    // this.example = this.myService.returnNewString();1
  }

  ngOnInit() {
    this.example = ""
  }
}
