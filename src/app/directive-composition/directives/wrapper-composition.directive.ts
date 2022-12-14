import { Directive, ElementRef, Input, Renderer2, SimpleChanges, OnChanges } from '@angular/core';
import { RenameCompositionDirective } from './rename-composition.directive';

@Directive({
  selector: '[appWrapperComposition]',
  standalone: true,
  hostDirectives: [
    {
      directive: RenameCompositionDirective
    }
  ],
})
export class WrapperCompositionDirective implements OnChanges {
  @Input() fontColor!: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fontColor']) {
      this.renderer.setStyle(this.element.nativeElement, 'color', this.fontColor);
    }
  }
}
