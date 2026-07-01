import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <a routerLink="/" class="back-link">{{ ts.translate('back') }}</a>
      <h1>{{ ts.translate('program_page.title') }}</h1>

      <div class="timeline" *ngIf="ts.hasTranslation('program_page.items')">
        <div class="timeline-item" *ngFor="let item of ts.translate('program_page.items')">
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
  ts = inject(TranslationService);
}
