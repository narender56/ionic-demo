import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
})
export class AccountPage {
  constructor(private router: Router) {};

  onAccountDelete() {
    this.router.navigate(['/account/delete']);
  }
}
