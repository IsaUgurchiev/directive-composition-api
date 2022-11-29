import {Directive, Input, ElementRef, SimpleChanges, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @Input() color!: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', this.color);
    }
  }
}
