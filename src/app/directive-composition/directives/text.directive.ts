import { Directive, Input, ElementRef, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[appText]',
  standalone: true,
})
export class TextDirective implements OnChanges {
  @Input() textContent!: string;

  constructor(private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['textContent']) {
      console.log('TextDirective');
      (this.element.nativeElement as HTMLElement).textContent = this.textContent;
    }
  }
}
