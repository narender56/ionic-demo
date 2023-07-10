import { Component, Input } from '@angular/core';

@Component({
  selector: 'LabelWithIcon',
  templateUrl: './label-with-icon.component.html',
})
export class LabelWithIconComponent {
  @Input() text: string | null = '';
  @Input() labelClasses?: string;

  @Input() icon?: string;
  @Input() iconClasses?: string;
}
