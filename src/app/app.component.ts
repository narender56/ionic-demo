import { Component } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';

interface RouteData {
  swipeEnabled?: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  swipeGesture: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) {
        const { swipeEnabled } = (event.snapshot.data as RouteData);
        this.swipeGesture = typeof swipeEnabled === 'boolean' ? swipeEnabled : false;
      }
    })
  }
}
