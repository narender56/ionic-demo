import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { DashboardPage } from './dashboard.page';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnnouncementsWidgetComponent, ConsumptionWidgetComponent } from 'src/app/components';

register();

@NgModule({
  imports: [
    DashboardPageRoutingModule,
    SharedModule,
  ],
  declarations: [DashboardPage, AnnouncementsWidgetComponent, ConsumptionWidgetComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardPageModule {}
