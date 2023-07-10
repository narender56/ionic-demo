import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'AppHeader',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  @Input() title: string = 'Immomio';
  @Input() translucent: boolean = true;
  @Input() loading: boolean = false;

  constructor(private router: Router) {};

  onAccountClick() {
    this.router.navigate(['/account'])
  }

  changeMode(event: Event) {
    document.body.classList.toggle('dark', (event as CustomEvent).detail.checked);
  }
}
