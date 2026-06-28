import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProgramComponent } from './pages/program/program.component';
import { UbytovaniComponent } from './pages/ubytovani/ubytovani.component';
import { DopravaComponent } from './pages/doprava/doprava.component';
import { DresscodeJidloComponent } from './pages/dresscode-jidlo/dresscode-jidlo.component';
import { DaryPomocComponent } from './pages/dary-pomoc/dary-pomoc.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'ubytovani', component: UbytovaniComponent },
  { path: 'doprava', component: DopravaComponent },
  { path: 'dresscode-jidlo', component: DresscodeJidloComponent },
  { path: 'dary-pomoc', component: DaryPomocComponent },
  { path: '**', redirectTo: '' }
];
