import {Directive, Input, ElementRef, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appDecompositionText]',
  standalone: true,
})
export class DecompositionTextDirective {
  @Input() text!: string;

  constructor(private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      (this.element.nativeElement as HTMLElement).textContent = this.text;
    }
  }
}
