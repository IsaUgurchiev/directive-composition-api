import { Directive } from '@angular/core';
import { DecompositionCalculateDirective } from './decomposition-calculate.directive';
import { DecompositionTextDirective } from './decomposition-text.directive';
import { DecompositionColorDirective } from './decomposition-color.directive';

@Directive({
  selector: '[appDecomposition]',
  standalone: true,
  hostDirectives: [
    {
      directive: DecompositionCalculateDirective,
      inputs: ['salary'],
      outputs: ['calculated']
    },
    {
      directive: DecompositionColorDirective,
      inputs: ['color'],
    },
    {
      directive: DecompositionTextDirective,
      inputs: ['text'],
    },
  ],
})
export class DecompositionDirective {}
