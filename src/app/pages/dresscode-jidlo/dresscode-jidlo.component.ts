import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dresscode-jidlo',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <a routerLink="/" class="back-link">← Zpět</a>
      <h1>Dresscode & Jídlo</h1>

      <section>
        <div class="card" style="border-left-color: var(--color-ruzova)">
          <h3>Dresscode</h3>
          <p><em>Cottage core casual (jen vtip)</em></p>
          <p>Budeme rádi za slavnostní oblečení, ale převážná část svatby bude zahradní slavnost. Je možné velké teplo i déšť. S oblekem se netrapte, oblečte se, ať je vám pohodlně. Prosíme jen se vyhýbat šíleným vzorům.</p>
        </div>

        <div class="card" style="border-left-color: var(--color-oranzova)">
          <h3>JÍDLO</h3>
          <p>Na oběd budou dva druhy polévky – masitá a bezmasá a malé občerstvení. Před obřadem také budou nějaké drobnosti a koláčky. Večeře bude formou grilování.</p>
          <p>Dle počasí budeme uzpůsobovat podávání jídla, při vedrech možná budeme schovávat jídla do lednice, tak se nebojte jí prošacovat a nabídnout si dle libosti.</p>
          <p>Pokud by se vám chtělo něco donést, tak budeme rádi za doplnění sladkého či nějakých slaných pochutin ke grilu. Napište nám jen dopředu, co plánujete pro lepší koordinaci.</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .back-link { display: block; margin-top: 20px; }
    h3 { text-align: left; margin-top: 0; }
  `]
})
export class DresscodeJidloComponent {}
