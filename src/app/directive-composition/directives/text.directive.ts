import {Directive, Input, ElementRef, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appText]',
  standalone: true,
})
export class TextDirective {
  @Input() textContent!: string;

  constructor(private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['textContent']) {
      (this.element.nativeElement as HTMLElement).textContent = this.textContent;
    }
  }
}
