import {Component, ViewChild} from '@angular/core';
import {InheritanceDirective} from '../inheritance.directive';

@Component({
  selector: 'app-inheritance-button',
  templateUrl: './inheritance-button.component.html',
  styleUrls: ['./inheritance-button.component.scss'],
  standalone: true,
  imports: [InheritanceDirective]
})
export class InheritanceButtonComponent {
  // @ViewChild(InheritanceDirective) inheritanceDirective!: InheritanceDirective

  onCalculated(value: number): void {
    alert(`You lost: ${value}$`);
  }
}
