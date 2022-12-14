import { Component } from '@angular/core';
import { RenameCompositionDirective } from '../directives/rename-composition.directive';

@Component({
  templateUrl: './rename-composition.component.html',
  standalone: true,
  imports: [RenameCompositionDirective]
})
export class RenameCompositionComponent {
  onCalculated(value: number): void {
    alert(`Your Salary is: ${value}$`);
  }
}
