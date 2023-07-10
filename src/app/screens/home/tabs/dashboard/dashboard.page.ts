import { Component } from '@angular/core';
import { RefresherEventDetail } from '@ionic/angular';

@Component({
  selector: 'DashboardPage',
  templateUrl: 'dashboard.page.html'
})
export class DashboardPage {
  handleRefresh(event: Event) {
    const customEvent = event as CustomEvent<RefresherEventDetail>;
    setTimeout(() => {
      customEvent.detail.complete();
    }, 2000);
  }
}
