import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-doprava',
  standalone: true,
  imports: [RouterLink, NgIf],
  template: `
    <div class="container">
      <a routerLink="/" class="back-link">{{ ts.translate('back') }}</a>
      <h1>{{ ts.translate('doprava_page.title') }}</h1>

      <section>
        <div class="card" *ngIf="ts.hasTranslation('doprava_page.address')">
          <h3>{{ ts.translate('doprava_page.address.title') }}</h3>
          <p>Vysoký Chlumec 82, 262 52 Vysoký Chlumec</p>
          <a href="https://mapy.com/s/hegesojage" target="_blank" class="map-link">{{ ts.translate('doprava_page.address.link') }}</a>
        </div>

        <div class="card" style="border-left-color: var(--color-oranzova)" *ngIf="ts.hasTranslation('doprava_page.mhd')">
          <h3>{{ ts.translate('doprava_page.mhd.title') }}</h3>
          <ul>
            <li *ngIf="ts.hasTranslation('doprava_page.mhd.item1')">{{ ts.translate('doprava_page.mhd.item1') }}</li>
            <li *ngIf="ts.hasTranslation('doprava_page.mhd.item2')">{{ ts.translate('doprava_page.mhd.item2') }}</li>
            <li *ngIf="ts.hasTranslation('doprava_page.mhd.stop')" [innerHTML]="ts.translate('doprava_page.mhd.stop')"></li>
          </ul>
        </div>

        <div class="card" style="border-left-color: var(--color-ruzova)" *ngIf="ts.hasTranslation('doprava_page.parking')">
          <h3>{{ ts.translate('doprava_page.parking.title') }}</h3>
          <ul>
            <li>{{ ts.translate('doprava_page.parking.item1') }}<a href="https://mapy.com/s/jekemuhaco" target="_blank">Mapa</a></li>
            <li>{{ ts.translate('doprava_page.parking.item2') }}<a href="https://mapy.com/s/bomeruzulo" target="_blank">Mapa</a></li>
            <li>{{ ts.translate('doprava_page.parking.item3') }}<a href="https://mapy.com/s/fegejaloja" target="_blank">Mapa</a></li>
          </ul>
        </div>

        <div class="card" style="border-left-color: var(--color-zluta)" *ngIf="ts.hasTranslation('doprava_page.warning')">
          <h3>{{ ts.translate('doprava_page.warning.title') }}</h3>
          <p>{{ ts.translate('doprava_page.warning.text') }}</p>
        </div>

        <div class="card" style="border-left-color: var(--color-zelena)" *ngIf="ts.hasTranslation('doprava_page.map')">
          <h3>{{ ts.translate('doprava_page.map.title') }}</h3>
          <a routerLink="/map" class="btn">{{ ts.translate('doprava_page.map.btn') }}</a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .back-link { display: block; margin-top: 20px; }
    h3 { text-align: left; margin-top: 0; }
    ul { padding-left: 20px; }
    .map-link { display: inline-block; margin-top: 10px; font-weight: bold; }
    .btn { margin-top: 10px; display: inline-block; background-color: var(--color-zelena); color: white; padding: 8px 16px; border-radius: 4px; }
  `]
})
export class DopravaComponent {
  ts = inject(TranslationService);
}
