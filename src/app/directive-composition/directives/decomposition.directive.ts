import { Directive } from '@angular/core';
import { DecompositionCalculateDirective } from './decomposition-calculate.directive';
import { DecompositionTextDirective } from './decomposition-text.directive';
import { DecompositionColorDirective } from './decomposition-color.directive';

/*@Directive({
  selector: '[appDecomposition]',
  standalone: true,
  hostDirectives: [
    {
      directive: DecompositionCalculateDirective,
      inputs: ['calcSalary'],
      outputs: ['calculated']
    },
    {
      directive: DecompositionColorDirective,
      inputs: ['backgroundColor'],
    },
    {
      directive: DecompositionTextDirective,
      inputs: ['textContent'],
    },
  ],
})
export class DecompositionDirective {}*/

@Directive({
  selector: '[appDecomposition]',
  standalone: true,
  hostDirectives: [
    {
      directive: DecompositionCalculateDirective,
      inputs: ['calcSalary: salary'],
      outputs: ['calculated: calc']
    },
    {
      directive: DecompositionColorDirective,
      inputs: ['backgroundColor: color'],
    },
    {
      directive: DecompositionTextDirective,
      inputs: ['textContent: text'],
    },
  ],
})
export class DecompositionDirective {}
