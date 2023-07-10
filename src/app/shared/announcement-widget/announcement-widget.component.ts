import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'AnnouncementWidget',
  templateUrl: './announcement-widget.component.html',
})
export class AnnouncementWidgetComponent {
  time: string = new Date().toISOString();

  @Output() onClick: EventEmitter<void> = new EventEmitter();

  handleAnnouncementClick() {
    this.onClick.emit();
  }
}
