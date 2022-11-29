import { Component } from '@angular/core';
import {InheritanceDirective} from '../inheritance.directive';

@Component({
  selector: 'app-inheritance-button',
  templateUrl: './inheritance-button.component.html',
  styleUrls: ['./inheritance-button.component.scss'],
  standalone: true,
  imports: [InheritanceDirective]
})
export class InheritanceButtonComponent {
  onCalculated(value: number): void {
    alert(`You lost: ${value}$`);
  }
}
