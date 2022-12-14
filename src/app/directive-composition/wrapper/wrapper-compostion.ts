import { Component } from '@angular/core';
import { WrapperCompositionDirective } from '../directives/wrapper-composition.directive';

@Component({
  templateUrl: './wrapper-composition.component.html',
  standalone: true,
  imports: [WrapperCompositionDirective]
})
export class WrapperCompostion {
  onCalculated(value: number): void {
    alert(`Your Salary is: ${value}$`);
  }
}
