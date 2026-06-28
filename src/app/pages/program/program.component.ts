import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <a routerLink="/" class="back-link">← Zpět</a>
      <h1>Program</h1>

      <div class="timeline">
        <div class="timeline-item" *ngFor="let item of program">
          <div class="time">{{item.time}}</div>
          <div class="event card">{{item.event}}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .back-link { display: block; margin-top: 20px; }
    .timeline {
      margin: 40px 0;
      position: relative;
    }
    .timeline-item {
      display: flex;
      margin-bottom: 20px;
      align-items: flex-start;
    }
    .time {
      font-weight: bold;
      color: var(--color-oranzova);
      min-width: 100px;
      padding-top: 20px;
    }
    .event {
      flex-grow: 1;
      margin-bottom: 0;
    }
    //@media (max-width: 480px) {
    //  .timeline-item { flex-direction: column; }
    //  .time { padding-top: 0; margin-bottom: 5px; min-width: auto; }
    //}
  `]
})
export class ProgramComponent {
  program = [
    { time: '12:00', event: 'Příjezd hostů' },
    { time: '13:00', event: 'Obřad ve Skanzenu' },
    { time: '14:00', event: 'Polévka a občerstvení' },
    { time: '17:00–19:00', event: 'Grilování a dort' },
    { time: 'Po 19:00', event: 'Volná zábava, tanec' }
  ];
}
