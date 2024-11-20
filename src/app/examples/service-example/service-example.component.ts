import { Component } from '@angular/core';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleThreeComponent } from './example-three/example-three.component';
import { ExampleFourComponent } from './example-four/example-four.component';

@Component({
  selector: 'app-service-example',
  standalone: true,
  imports: [
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent,
    ExampleFourComponent
  ],
  templateUrl: './service-example.component.html',
  styleUrl: './service-example.component.scss'
})
export class ServiceExampleComponent {

}
