import {Directive, Input, ElementRef, SimpleChanges, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true,
})
export class ColorDirective {
  @Input() backgroundColor!: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['backgroundColor']) {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', this.backgroundColor);
    }
  }
}
