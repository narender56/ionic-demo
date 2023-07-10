import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ActionLabel',
  templateUrl: './action-label.component.html',
})
export class ActionLabelComponent {
  @Input() label: string = '';
  @Input() labelClasses: string = '';

  @Input() icon: string = '';
  @Input() iconClasses: string = '';

  @Input() actionButtonText = '';
  @Input() actionButtonClasses = '';

  @Output() onClick: EventEmitter<void> = new EventEmitter();

  handleActionClick() {
    this.onClick.emit();
  }
};
