import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { HomePagePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';

register();

@NgModule({
  imports: [
    HomePagePageRoutingModule,
    SharedModule,
  ],
  declarations: [HomePage],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
