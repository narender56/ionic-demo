import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { ReportsPage } from './reports.page';

import { ReportsPageRoutingModule } from './reports-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DamageReportCardComponent } from 'src/app/components';

register();

@NgModule({
  imports: [
    ReportsPageRoutingModule,
    SharedModule
  ],
  declarations: [ReportsPage, DamageReportCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReportsPageModule {}
