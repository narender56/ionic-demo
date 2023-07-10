import { Component, ElementRef, ViewChild } from '@angular/core';
import { RefresherEventDetail } from '@ionic/angular';
import { Swiper } from 'swiper';

@Component({
  selector: 'Reports',
  templateUrl: 'reports.page.html',
})
export class ReportsPage {
  @ViewChild('swiper', { static: false }) swiper: ElementRef | undefined;

  segment: string = 'Damages';

  handleRefresh(event: Event) {
    const customEvent = event as CustomEvent<RefresherEventDetail>;
    setTimeout(() => {
      customEvent.detail.complete();
    }, 2000);
  }

  getSwiper(): Swiper {
    const { swiper } = this.swiper?.nativeElement;
    return swiper;
  }
  
  onSegmentChange(event: Event) {
    const customEvent = event as CustomEvent;
    this.segment = customEvent.detail.value;
  
    this.updateSegmentView();
  }

  updateSegmentView() {
    const swiper = this.getSwiper();
    if (this.segment === 'OtherConcerns') {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  }
}
