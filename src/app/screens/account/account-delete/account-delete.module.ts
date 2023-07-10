import { NgModule } from '@angular/core';

import { AccountDeletePageRoutingModule } from './account-delete-routing.module';

import { AccountDeletePage } from './account-delete.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AccountDeletePageRoutingModule
  ],
  declarations: [AccountDeletePage]
})
export class AccountDeletePageModule {}
