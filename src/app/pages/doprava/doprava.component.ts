import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doprava',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <a routerLink="/" class="back-link">← Zpět</a>
      <h1>Doprava</h1>

      <section>
        <div class="card">
          <h3>Adresa</h3>
          <p>Vysoký Chlumec 82, 262 52 Vysoký Chlumec</p>
          <a href="https://mapy.cz/s/3r6Zf" target="_blank" class="map-link">Otevřít na Mapy.cz</a>
        </div>

        <div class="card" style="border-left-color: var(--color-oranzova)">
          <h3>MHD</h3>
          <ul>
            <li>Autobus 360 ze Smíchovského nádraží</li>
            <li>Autobus 450/549 ze Sedlčan</li>
            <li>Zastávka: <strong>Vysoký Chlumec</strong> nebo <strong>Vysoký Chlumec, pivovar</strong></li>
          </ul>
        </div>

        <div class="card" style="border-left-color: var(--color-ruzova)">
          <h3>Parking</h3>
          <ul>
            <li>U pivovaru: <a href="https://plus.codes/8FXPJ9FP+46" target="_blank">J9FP+46</a></li>
            <li>Na návsi: <a href="https://plus.codes/8FXPJ99Q+8Q" target="_blank">J99Q+8Q</a></li>
            <li>U Skanzenu: <a href="https://plus.codes/8FXPJ98V+3F" target="_blank">J98V+3F</a></li>
          </ul>
        </div>

        <div class="card" style="border-left-color: var(--color-zluta)">
          <h3>Upozornění</h3>
          <p>Kdo jste u nás nebyl, tak jen upozornění, že Vysoký Chlumec je doopravdy vysoký. Skanzen, kde se bude
            odehrávat obřad, je na jedné straně kopce, sál je na vršku a chalupa poté na druhé straně kopce.</p>
        </div>

        <div class="card" style="border-left-color: var(--color-zelena)">
          <h3>Mapa</h3>
          <p>Zde si můžete stáhnout mapu v PDF (brzy).</p>
          <a href="/src/assets/mapa.pdf" target="_blank" class="btn">Stáhnout mapu PDF</a>
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
export class DopravaComponent {}
