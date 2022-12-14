import { Directive, Input, ElementRef, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[appText]',
})
export class TextDirective implements OnChanges {
  @Input() textContent!: string;

  constructor(private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['textContent']) {
      (this.element.nativeElement as HTMLElement).textContent = this.textContent;
    }
  }
}
