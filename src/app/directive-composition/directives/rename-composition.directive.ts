import { Directive } from '@angular/core';
import { CalculateDirective } from './calculate.directive';
import { ColorDirective } from './color.directive';
import { TextDirective } from './text.directive';

@Directive({
  selector: '[appRenameComposition]',
  standalone: true,
  hostDirectives: [
    {
      directive: CalculateDirective,
      inputs: ['calcSalary: mySalary'],
      outputs: ['calculated: myCalc']
    },
    {
      directive: ColorDirective,
      inputs: ['backgroundColor: myColor'],
    },
    {
      directive: TextDirective,
      inputs: ['textContent: myText'],
    },
  ],
})
export class RenameCompositionDirective {}
















