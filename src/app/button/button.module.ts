import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { CalculateDirective } from './calculate.directive';
import { ColorDirective } from './color.directive';
import { TextDirective } from './text.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    CalculateDirective,
    ColorDirective,
    TextDirective,
  ]
})
export class ButtonModule { }
