import { Directive, ElementRef, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CompositionDirective } from './composition.directive';

@Directive({
  selector: '[appDuplicateParamsCompositionDirective]',
  standalone: true,
  hostDirectives: [
    {
      directive: CompositionDirective
    }
  ],
})
export class DuplicateParamsCompositionDirective implements OnChanges {
  @Input() textContent!: string;

  constructor(private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['textContent']) {
      console.log('DuplicateParamsCompositionDirective');
      setTimeout(() => {
        (this.element.nativeElement as HTMLElement).textContent = this.textContent + '!!!';
      }, 2000);
    }
  }
}
