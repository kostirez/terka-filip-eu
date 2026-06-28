import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dary-pomoc',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <a routerLink="/" class="back-link">← Zpět</a>
      <h1>Dary & Pomoc</h1>

      <section>
        <div class="card" style="border-left-color: var(--color-zelena)">
          <h3>Dary</h3>
          <p>Vše máme a nic nepotřebujeme. Pokud byste nám i tak chtěli něco podarovat, tak nejvíce oceníme finanční příspěvek.</p>
        </div>

        <div class="card" style="border-left-color: var(--color-zluta)">
          <h3>Pomocná ruka</h3>
          <p>Na chalupě budeme už v průběhu týdne a rádi užijeme společnost a pomocnou ruku. Dejte vědět, pokud budete chtít už s námi na Chlumci pobýt dřív, ať nakoupíme dostatečné množství sudů.</p>
          <p>Přijímáme návrhy na hry, drinky a jiné nápady na cokoliv.</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .back-link { display: block; margin-top: 20px; }
    h3 { text-align: left; margin-top: 0; }
  `]
})
export class DaryPomocComponent {}
