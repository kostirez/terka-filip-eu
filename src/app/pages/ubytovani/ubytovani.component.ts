import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ubytovani',
  standalone: true,
  imports: [RouterLink, NgIf],
  template: `
    <div class="container">
      <a routerLink="/" class="back-link">{{ ts.translate('back') }}</a>
      <h1>{{ ts.translate('ubytovani_page.title') }}</h1>

      <section>
        <div class="card" style="border-left-color: var(--color-zluta)" *ngIf="ts.hasTranslation('ubytovani_page.accommodation')">
          <h3>{{ ts.translate('ubytovani_page.accommodation.title') }}</h3>
          <p>{{ ts.translate('ubytovani_page.accommodation.text') }}</p>
        </div>

        <div class="card" style="border-left-color: var(--color-oranzova)" *ngIf="ts.hasTranslation('ubytovani_page.shower')">
          <h3>{{ ts.translate('ubytovani_page.shower.title') }}</h3>
          <p>{{ ts.translate('ubytovani_page.shower.text') }}</p>
        </div>

        <div class="card" style="border-left-color: var(--color-ruzova)" *ngIf="ts.hasTranslation('ubytovani_page.wc')">
          <h3>{{ ts.translate('ubytovani_page.wc.title') }}</h3>
          <p>{{ ts.translate('ubytovani_page.wc.text') }}</p>
          <p>{{ ts.translate('ubytovani_page.wc.text2') }}</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .back-link { display: block; margin-top: 20px; }
    h3 { text-align: left; margin-top: 0; }
  `]
})
export class UbytovaniComponent {
  ts = inject(TranslationService);
}
