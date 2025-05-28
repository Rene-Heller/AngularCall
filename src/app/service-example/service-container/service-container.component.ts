import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';
import { BtnDirectiveDirective } from '../../shared/directives/btn-directive.directive';

@Component({
  selector: 'app-service-container',
  imports: [BtnDirectiveDirective],
  templateUrl: './service-container.component.html',
  styleUrl: './service-container.component.scss'
})
export class ServiceContainerComponent implements OnInit {
  calculator = inject(CalculatorService);
  firstNumber = viewChild('firstNumber');
  secondNumber = viewChild('secondNumber');

  result = signal<number>(0);

  ngOnInit(): void {
    this.result.set(this.calculator.add(1, 2));
  }

  addNumbers(a: number, b: number) {
    this.result.set(this.calculator.add(a, b));
  }

  substractNumbers(a: number, b: number) {
    this.result.set(this.calculator.subtract(a, b));
  }

  multiplyNumbers(a: number, b: number) {
    this.result.set(this.calculator.multiply(a, b));
  }

}
