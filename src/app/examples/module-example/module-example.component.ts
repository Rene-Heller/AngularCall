import { Component, effect, signal } from '@angular/core';
import { PipeExampleComponent } from '../pipe-example/pipe-example.component';

@Component({
    selector: 'app-module-example',
    imports: [PipeExampleComponent],
    templateUrl: './module-example.component.html',
    styleUrl: './module-example.component.scss'
})
export class ModuleExampleComponent {
value = signal(10)

  constructor() {
    effect(()=>{
      console.log("value changed: ", this.value())
    })
    setTimeout(()=>{
      this.increment()
    }, 3000)
  }

  increment() {
    this.value.set(this.value() + 1)
  }
}
