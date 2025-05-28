import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-container',
  imports: [CardComponent],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss'
})
export class CardContainerComponent {
  cardList = [
    { title: 'Zufall', text: 'some random text' },
    { title: 'Zufall', text: 'some random text' },
    { title: 'Zufall', text: 'some random text' },
    { title: 'Zufall', text: 'some random text' },
    { title: 'Zufall', text: 'some random text' }
  ]

  doubleCards() {
    this.cardList = [...this.cardList, ...this.cardList]
  }

  reduceToOne() {
    this.cardList = [{ title: 'Zufall', text: 'some random text' }]
  }


}
