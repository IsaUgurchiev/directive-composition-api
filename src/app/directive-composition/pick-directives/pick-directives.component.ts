import { Component, Directive, ViewChild } from '@angular/core';
import { WrapperCompositionDirective } from '../directives/wrapper-composition.directive';
import { RenameCompositionDirective} from '../directives/rename-composition.directive';
import { CalculateDirective } from '../directives/calculate.directive';
import { ColorDirective } from '../directives/color.directive';
import { TextDirective } from '../directives/text.directive';

@Component({
  templateUrl: './pick-directives.component.html',
  standalone: true,
  imports: [WrapperCompositionDirective]
})
export class PickDirectivesComponent {
  @ViewChild(WrapperCompositionDirective) wrapperCompositionDirective!: WrapperCompositionDirective;
  @ViewChild(RenameCompositionDirective) renameCompositionDirective!: RenameCompositionDirective;
  @ViewChild(CalculateDirective) calculateDirective!: CalculateDirective;
  @ViewChild(ColorDirective) colorDirective!: ColorDirective;
  @ViewChild(TextDirective) textDirective!: TextDirective;

  onCalculated(value: number): void {
    alert(`Your Salary is: ${value}$`);
  }

  ngAfterViewInit() {
    this.renderTable();
  }

  private renderTable() {
    console.table([
      new DirectiveDisplay('WrapperCompositionDirective', this.wrapperCompositionDirective),
      new DirectiveDisplay('RenameCompositionDirective', this.renameCompositionDirective),
      new DirectiveDisplay('CalculateDirective', this.calculateDirective),
      new DirectiveDisplay('ColorDirective', this.colorDirective),
      new DirectiveDisplay('TextDirective', this.textDirective)
    ]);
  }
}

class DirectiveDisplay {
  directive: string;
  value: any;

  constructor(directive: string, value: unknown) {
    this.directive = directive;
    this.value = value;
  }
}
