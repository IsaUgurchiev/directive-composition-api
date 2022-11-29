import { Component } from '@angular/core';
import { DecompositionDirective } from './directives/decomposition.directive';

@Component({
  selector: 'app-decomposition-button',
  templateUrl: './decomposition-button.component.html',
  styleUrls: ['./decomposition-button.component.scss'],
  standalone: true,
  imports: [DecompositionDirective]
})
export class DecompositionButtonComponent {
  onCalculated(value: number): void {
    alert(`Your Salary is: ${value}$`);
  }
}
