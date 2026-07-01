import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dary-pomoc',
  standalone: true,
  imports: [RouterLink, NgIf],
  template: `
    <div class="container">
      <a routerLink="/" class="back-link">{{ ts.translate('back') }}</a>
      <h1>{{ ts.translate('dary_page.title') }}</h1>

      <section>
        <div class="card" style="border-left-color: var(--color-zelena)" *ngIf="ts.hasTranslation('dary_page.gifts')">
          <h3>{{ ts.translate('dary_page.gifts.title') }}</h3>
          <p>{{ ts.translate('dary_page.gifts.text') }}</p>
        </div>

        <div class="card" style="border-left-color: var(--color-zluta)" *ngIf="ts.hasTranslation('dary_page.help')">
          <h3>{{ ts.translate('dary_page.help.title') }}</h3>
          <p *ngIf="ts.hasTranslation('dary_page.help.text1')">{{ ts.translate('dary_page.help.text1') }}</p>
          <p *ngIf="ts.hasTranslation('dary_page.help.text2')">{{ ts.translate('dary_page.help.text2') }}</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .back-link { display: block; margin-top: 20px; }
    h3 { text-align: left; margin-top: 0; }
  `]
})
export class DaryPomocComponent {
  ts = inject(TranslationService);
}
