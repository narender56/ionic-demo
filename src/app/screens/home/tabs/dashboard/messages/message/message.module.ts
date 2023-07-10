import { NgModule } from '@angular/core';

import { MessagePageRoutingModule } from './message-routing.module';

import { MessagePage } from './message.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MessagePageRoutingModule
  ],
  declarations: [MessagePage]
})
export class MessagePageModule {}
