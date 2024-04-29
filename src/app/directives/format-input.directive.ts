import { Directive, HostListener, Input } from '@angular/core';
import { formatString } from '@utils/text.utils';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[formatInput]',
  standalone: true,
})
export class FormatInputDirective {
  @Input() formatInput!: AbstractControl;

  constructor() {}

  @HostListener('blur', ['$event']) onInputChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    target.value = formatString(target.value);
    this.formatInput.patchValue(target.value);
  }
}
