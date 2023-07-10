import { NgModule } from '@angular/core';

import { NewsPage } from './news.page';
import { NewsPageRoutingModule } from './news-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    NewsPageRoutingModule,
    SharedModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
