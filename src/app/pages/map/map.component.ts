import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [RouterLink, NgIf],
  template: `
    <div class="main-container">
    <div class="container">
      <a routerLink="/" class="back-link">{{ ts.translate('back') }}</a>
      <h1>{{ ts.translate('nav.map') }}</h1>

      <div class="map-container">
        <img src="assets/map.webp" alt="Mapa" class="map-image">
      </div>

      <div style="margin-top: 20px; text-align: center;" *ngIf="ts.hasTranslation('doprava_page.map.btn')">
        <a href="assets/map.pdf" target="_blank" class="btn">{{ ts.translate('doprava_page.map.btn') }}</a>
      </div>
    </div>
    </div>
  `,
  styles: [`

    .main-container {
      width: 100%;
      margin: 0 auto;
      padding: 0 ;
      background: white;
    }

    .back-link { display: block; margin-top: 0px; }
    .map-container {
      margin-top: 0px;
      text-align: center;
      background-color: white;
      padding: 0px;
      border-radius:  0px;
    }
    .map-image {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
    .btn {
      display: inline-block;
      background-color: var(--color-zelena);
      color: white;
      padding: 10px 20px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
    }
  `]
})
export class MapComponent {
  ts = inject(TranslationService);
}
