import {Directive, HostListener, Output, EventEmitter, Input} from '@angular/core';

const TAX = 15;

@Directive({
  selector: '[appDecomposotionCalculate]',
  standalone: true,
})
export class DecompositionCalculateDirective {
  @Input() salary = 0;

  @Output() calculated = new EventEmitter();

  @HostListener('click', ['$event']) keyDown(event: KeyboardEvent) {
    let res = this.salary * TAX / 100;
    this.calculated.emit(this.salary - res);
  }
}
