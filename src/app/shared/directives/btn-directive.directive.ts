import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button'
})
export class BtnDirectiveDirective {
  el = inject(ElementRef)

  constructor() {
    this.el.nativeElement.classList.add('btn-blue')
  }

}
