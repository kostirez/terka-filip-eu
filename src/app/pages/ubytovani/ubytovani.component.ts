import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ubytovani',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <a routerLink="/" class="back-link">← Zpět</a>
      <h1>Ubytování</h1>

      <section>
        <div class="card" style="border-left-color: var(--color-zluta)">
          <h3>Ubytování</h3>
          <p>Rodina zajištěné ubytování po okolí. Všechny kamarády prosíme o zabalení karimatek a spacáku a všichni se nějak poskládáme do chalupy. Možné spaní na půdě a ve stodole a vytvoříme také stanové městečko. Věříme že lehké nepohodlí s námi zvládnete.</p>
        </div>

        <div class="card" style="border-left-color: var(--color-oranzova)">
          <h3>Sprcha</h3>
          <p>Sprchy prosíme využívat komu nevadí v šatnách na fotbalovém hřišti a za tepla bude možná i venkovní solární sprcha.</p>
        </div>

        <div class="card" style="border-left-color: var(--color-ruzova)">
          <h3>WC</h3>
          <p>V chalupě máme dvě wc a jednu sprchu. Další jsou pak možné využít v šatnách na fotbalovém hřišti.</p>
          <p>U sprchování prosíme být ohleduplní ať se zvládnem všichni nějak vystřídat.</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .back-link { display: block; margin-top: 20px; }
    h3 { text-align: left; margin-top: 0; }
  `]
})
export class UbytovaniComponent {}
