import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIf],
  template: `
    <div class="hero">
      <div class="hero-content">
        <h1>{{ ts.translate('title') }}</h1>
<!--        <img src="/assets/bg.webp" alt="Terka & Filip" class="hero-image">-->
        <p class="date">{{ ts.translate('date') }}</p>
      </div>
    </div>

    <div class="container nav-grid">
      <a *ngIf="ts.hasTranslation('nav.program')" routerLink="/program" class="nav-card" style="background-color: var(--color-zelena)">{{ ts.translate('nav.program') }}</a>
      <a *ngIf="ts.hasTranslation('nav.ubytovani')" routerLink="/ubytovani" class="nav-card" style="background-color: var(--color-zluta)">{{ ts.translate('nav.ubytovani') }}</a>
      <a *ngIf="ts.hasTranslation('nav.doprava')" routerLink="/doprava" class="nav-card" style="background-color: var(--color-oranzova)">{{ ts.translate('nav.doprava') }}</a>
      <a *ngIf="ts.hasTranslation('nav.map')" routerLink="/map" class="nav-card" style="background-color: var(--color-zelena)">{{ ts.translate('nav.map') }}</a>
      <a *ngIf="ts.hasTranslation('nav.dresscode')" routerLink="/dresscode-jidlo" class="nav-card" style="background-color: var(--color-ruzova)">{{ ts.translate('nav.dresscode') }}</a>
      <a *ngIf="ts.hasTranslation('nav.dary')" routerLink="/dary-pomoc" class="nav-card" style="background-color: var(--color-oranzova)">{{ ts.translate('nav.dary') }}</a>
    </div>
  `,
  styles: [`
    .hero {
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      margin-bottom: 40px;
    }

    h1 {
      color: var(--color-zelena);;
      font-size: 3rem;
      margin-bottom: 10px;
      text-shadow: 2px 2px 4px rgba(84, 59, 0, 0.5);
    }

    .hero-image {
      max-width: 200px;
      max-height: 230px;
      object-fit: cover;
    }

    .date {
      font-size: 1.5rem;
      color: var(--color-oranzova);;
    }

    .nav-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
      padding-bottom: 40px;
    }

    .nav-card {
      padding: 25px;
      border-radius: 15px;
      color: white;
      text-align: center;
      font-weight: bold;
      font-size: 1.2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s;
    }

    .nav-card:active {
      transform: scale(0.98);
    }

    @media (min-width: 600px) {
      .nav-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  `]
})
export class HomeComponent {
  ts = inject(TranslationService);
}
