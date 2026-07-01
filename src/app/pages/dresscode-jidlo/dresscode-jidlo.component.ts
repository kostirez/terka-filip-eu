import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dresscode-jidlo',
  standalone: true,
  imports: [RouterLink, NgIf],
  template: `
    <div class="container">
      <a routerLink="/" class="back-link">{{ ts.translate('back') }}</a>
      <h1>{{ ts.translate('dresscode_page.title') }}</h1>

      <section>
        <div class="card" style="border-left-color: var(--color-ruzova)" *ngIf="ts.hasTranslation('dresscode_page.dresscode')">
          <h3>{{ ts.translate('dresscode_page.dresscode.title') }}</h3>
          <p *ngIf="ts.hasTranslation('dresscode_page.dresscode.joke')"><em>{{ ts.translate('dresscode_page.dresscode.joke') }}</em></p>
          <p>{{ ts.translate('dresscode_page.dresscode.text') }}</p>
        </div>

        <div class="card" style="border-left-color: var(--color-oranzova)" *ngIf="ts.hasTranslation('dresscode_page.food')">
          <h3>{{ ts.translate('dresscode_page.food.title') }}</h3>
          <p *ngIf="ts.hasTranslation('dresscode_page.food.text1')">{{ ts.translate('dresscode_page.food.text1') }}</p>
          <p *ngIf="ts.hasTranslation('dresscode_page.food.text2')">{{ ts.translate('dresscode_page.food.text2') }}</p>
          <p *ngIf="ts.hasTranslation('dresscode_page.food.text3')">{{ ts.translate('dresscode_page.food.text3') }}</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .back-link { display: block; margin-top: 20px; }
    h3 { text-align: left; margin-top: 0; }
  `]
})
export class DresscodeJidloComponent {
  ts = inject(TranslationService);
}
