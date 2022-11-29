import {Directive, Input, ElementRef, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appText]',
})
export class TextDirective {
  @Input() text!: string;

  constructor(private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      (this.element.nativeElement as HTMLElement).textContent = this.text;
    }
  }
}
