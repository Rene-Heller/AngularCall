import { TestBed } from '@angular/core/testing';
import { BtnDirectiveDirective } from './btn-directive.directive';
import { ElementRef, EnvironmentInjector, runInInjectionContext } from '@angular/core';

// directives: brauchen ein mock-element auf das sie applied werden können.
// das element muss über die DOM API mit document.createElement erstellt werden.
// im Anschluss wird es als value in den provider für ein ElementRef übergeben
// ein injector muss über das Testbed erstellt werden --> TestBed.inject(EnvironmentInjector)
// dann wird im injection context die directive instanziert
// erst jetzt wird die directive instanziert

describe('BtnDirectiveDirective', () => {
  let directive: BtnDirectiveDirective;
  it('should create an instance', () => {
    const mockElement = { nativeElement: document.createElement('button') };
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: mockElement
        }
      ]
    })
    const injector = TestBed.inject(EnvironmentInjector);

    runInInjectionContext(injector, () => {
      directive = new BtnDirectiveDirective();
    })

    expect(directive).toBeTruthy();
  });
});
