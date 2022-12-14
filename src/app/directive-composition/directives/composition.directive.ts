import { Directive } from '@angular/core';
import { CalculateDirective } from './calculate.directive';
import { ColorDirective } from './color.directive';
import { TextDirective } from './text.directive';

@Directive({
  selector: '[appComposition]',
  standalone: true,
  hostDirectives: [
    {
      directive: CalculateDirective,
      inputs: ['calcSalary'],
      outputs: ['calculated']
    },
    {
      directive: ColorDirective,
      inputs: ['backgroundColor'],
    },
    {
      directive: TextDirective,
      inputs: ['textContent'],
    },
  ],
})
export class CompositionDirective {}
