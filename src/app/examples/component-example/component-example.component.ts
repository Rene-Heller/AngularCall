import { Component } from '@angular/core';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-component-example',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './component-example.component.html',
  styleUrl: './component-example.component.scss'
})
export class ComponentExampleComponent {

}
