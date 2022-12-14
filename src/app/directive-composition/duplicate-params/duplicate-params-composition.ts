import { Component } from '@angular/core';
import { DuplicateParamsCompositionDirective } from '../directives/duplicate-params-composition.directive';

@Component({
  templateUrl: './duplicate-params-composition.component.html',
  standalone: true,
  imports: [DuplicateParamsCompositionDirective]
})
export class DuplicateParamsComposition {
  onCalculated(value: number): void {
    alert(`Your Salary is: ${value}$`);
  }
}
