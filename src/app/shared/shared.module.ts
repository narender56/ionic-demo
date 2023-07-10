import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { I18nPipe } from '../i18n';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FormsModule } from '@angular/forms';
import { LabelWithIconComponent } from './label-with-icon/label-with-icon.component';
import { ActionLabelComponent } from './action-label/action-label.component';
import { AnnouncementWidgetComponent } from './announcement-widget/announcement-widget.component';

const modules = [
  CommonModule,
  FormsModule,
  IonicModule
];

const components = [
  ActionLabelComponent,
  AnnouncementWidgetComponent,
  AppHeaderComponent,
  LabelWithIconComponent,
];

const pipes = [I18nPipe];

@NgModule({
  imports: [...modules],
  declarations: [
    ...components,
    ...pipes
  ],
  exports: [
    ...modules,
    ...components,
    ...pipes
  ],
  providers: [],
})
export class SharedModule {}
