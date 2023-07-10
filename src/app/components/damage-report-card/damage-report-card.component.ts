import { Component } from '@angular/core';

@Component({
  selector: 'DamageReportCard',
  templateUrl: './damage-report-card.component.html',
})
export class DamageReportCardComponent {
  time = new Date().toISOString();
}
