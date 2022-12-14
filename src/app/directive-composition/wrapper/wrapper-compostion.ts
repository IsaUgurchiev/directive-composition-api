import { Component } from '@angular/core';
import { WrapperCompisitionDirective } from '../directives/wrapper-compisition.directive';

@Component({
  templateUrl: './wrapper-composition.component.html',
  standalone: true,
  imports: [WrapperCompisitionDirective]
})
export class WrapperCompostion {
  onCalculated(value: number): void {
    alert(`Your Salary is: ${value}$`);
  }
}
