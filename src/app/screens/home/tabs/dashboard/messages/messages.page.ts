import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RefresherEventDetail } from '@ionic/angular';

@Component({
  selector: 'Messages',
  templateUrl: './messages.page.html'
})
export class MessagesPage {
  messages = Array(10).fill(10);

  constructor(private router: Router) {};

  handleRefresh(event: Event) {
    const customEvent = event as CustomEvent<RefresherEventDetail>;
    setTimeout(() => {
      customEvent.detail.complete();
    }, 2000);
  }

  onAnnouncementClick(i: number) {
    this.router.navigate([`/home/dashboard/messages/${i}`])
  }
}

