import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  title = model.required<string>()
  text = model.required<string>()

  clear() {
    this.title.set('')
    this.text.set('')
  }

}
