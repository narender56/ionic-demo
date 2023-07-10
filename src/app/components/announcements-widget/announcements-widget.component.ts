import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'AnnouncementsWidget',
  templateUrl: './announcements-widget.component.html',
})
export class AnnouncementsWidgetComponent {
  list = Array(6).fill(0);

  constructor(private router: Router) {};

  handleMessageOverviewClick() {
    this.router.navigate(['/home/dashboard/messages']);
  }

  onAnnouncementClick(i: number) {
    this.router.navigate([`/home/dashboard/messages/${i}`]);
  }
}
