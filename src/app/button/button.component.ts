import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  onCalculated(value: number): void {
    alert(`Your Salary is: ${value}$`);
  }
}
