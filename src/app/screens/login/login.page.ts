import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { I18nService } from 'src/app/i18n';
import { Swiper } from 'swiper';
import { EffectFlip } from 'swiper/modules';
import { AppUpdate, AppUpdateAvailability } from '@capawesome/capacitor-app-update';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper: ElementRef | undefined;

  allowTouchMove: boolean = false;
  loading: boolean = false;
  email: string = '';
  modules = [EffectFlip];

  creativeEffect = {
    prev: {
      shadow: false,
      translate: ["-150%", 0, -800],
      rotate: [-90, 0, 0],
    },
    next: {
      shadow: false,
      translate: ["150%", 0, -800],
      rotate: [90, 0, 0],
    },
  }
 
  constructor(private router: Router, private loadingCtrl: LoadingController, private i18nService: I18nService) {};

  async ngOnInit() {
    if (Capacitor.getPlatform() !== 'web') {
      try {
        const result = await AppUpdate.getAppUpdateInfo();
        if (result.updateAvailability === AppUpdateAvailability.UPDATE_AVAILABLE) {
          alert('Update available')
        }
      } catch(err) {}
    }
  }
 
  getSwiper(): Swiper {
    const { swiper } = this.swiper?.nativeElement;
    return swiper;
  }

  onNext() {
    this.loading = true;
    // setTimeout(() => {
      this.allowTouchMove = true;
      this.loading = false;
      const swiper = this.getSwiper();
      swiper.slideNext();
    // }, 2000)
  }

  onPrevious() {
    this.allowTouchMove = false;
    const swiper = this.getSwiper();
    swiper.slidePrev();
  }

  async onLogin() {
    const loader = await this.loadingCtrl.create({
      message: this.i18nService.translate('FetchingDetails'),
      duration: 3000,
    });

    loader.present();
    await loader.onDidDismiss();
    this.router.navigate(['/home']);
  }

  changeLangauge() {
    this.i18nService.changeLanguage('de');
    location.reload();
  }
}
