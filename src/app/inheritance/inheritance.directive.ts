import {Directive, ElementRef, Input, Renderer2, SimpleChanges} from '@angular/core';
import { DecompositionDirective } from '../directive-composition/directives/decomposition.directive';

@Directive({
  selector: '[appInheritance]',
  standalone: true,
  hostDirectives: [
    {
      directive: DecompositionDirective
    }
  ],
})
export class InheritanceDirective {
  @Input() fontColor!: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fontColor']) {
      this.renderer.setStyle(this.element.nativeElement, 'color', this.fontColor);
    }
  }
}

// Переопределение
/*@Directive({
  selector: '[appInheritance]',
  standalone: true,
  hostDirectives: [
    {
      directive: DecompositionDirective
    }
  ],
})
export class InheritanceDirective {
  @Input() text!: string;

  constructor(private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      (this.element.nativeElement as HTMLElement).textContent = this.text + '!!!';
    }
  }
}*/
