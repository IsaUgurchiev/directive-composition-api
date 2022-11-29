import {Directive, HostListener, Output, EventEmitter, Input} from '@angular/core';

const TAX = 15;

@Directive({
  selector: '[appCalculate]',
})
export class CalculateDirective {
  @Input() calcSalary = 0;

  @Output() calculated = new EventEmitter();

  @HostListener('click', ['$event']) keyDown(event: KeyboardEvent) {
    let res = this.calcSalary * TAX / 100;
    this.calculated.emit(this.calcSalary - res);
  }
}
