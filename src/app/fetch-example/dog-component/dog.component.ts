import { Component, inject } from '@angular/core';
import { DogServiceService } from '../dog-service/dog-service.service';
import { BtnDirectiveDirective } from '../../shared/directives/btn-directive.directive';

@Component({
  selector: 'app-dog',
  imports: [BtnDirectiveDirective],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.scss'
})
export class DogComponent {
  dogs: string[] = [];
  private service = inject(DogServiceService)


  getDogs() {
    this.service.fetchDogs().subscribe(dogs => {
      this.dogs = dogs
    })
  }

}
