import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { CalculateDirective } from './directives/calculate.directive';
import { ColorDirective } from './directives/color.directive';
import { TextDirective } from './directives/text.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    CalculateDirective,
    ColorDirective,
    TextDirective,
  ]
})
export class ButtonModule { }
