import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.scss'
})
export class PipeExampleComponent {
  pipeValue = signal('test');

  constructor() {
    setTimeout(()=>{this.pipeValue.set("bestanden")}, 6000)
  }

}
