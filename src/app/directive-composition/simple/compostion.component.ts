import { Component } from '@angular/core';
import { CompositionDirective } from '../directives/composition.directive';

@Component({
  templateUrl: './composition.component.html',
  standalone: true,
  imports: [CompositionDirective]
})
export class CompostionComponent {
  onCalculated(value: number): void {
    alert(`Your Salary is: ${value}$`);
  }
}
