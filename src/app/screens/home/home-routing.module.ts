import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./tabs/dashboard/dashboard.module').then(m => m.DashboardPageModule),
      },
      {
        path: 'news',
        loadChildren: () => import('./tabs/news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./tabs/reports/reports.module').then(m => m.ReportsPageModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePagePageRoutingModule {}
