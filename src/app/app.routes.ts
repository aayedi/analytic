import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { MonitoringComponent } from './monitoring/monitoring.component';
import { StatisticComponent } from './statistic/statistic.component';
import { ReeditionComponent } from './reedition/reedition.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'monitoring', pathMatch: 'full' },
  { path: 'monitoring', component: MonitoringComponent },
  { path: 'reedition', component: ReeditionComponent },
  { path: 'statistics', component: StatisticComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });
