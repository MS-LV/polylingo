import { Routes } from '@angular/router';
import { studentRoutes } from '@student/student.routes';
import { adminRoutes } from '@admin/admin.routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'welcome',
    title: 'Welcome',
    loadComponent: () =>
      import('@views/welcome/welcome.component').then(m => m.WelcomeComponent),
  },
  ...studentRoutes(),
  ...adminRoutes(),
  {
    path: '**',
    title: 'Page Not Found',
    loadComponent: () => 
      import('@views/error/error.component').then((m) => m.ErrorComponent)
  }
];
