import { Component } from '@angular/core';

@Component({
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  onCalculated(value: number): void {
    alert(`Your Salary is: ${value}$`);
  }
}
