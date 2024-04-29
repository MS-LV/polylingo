import { Routes } from '@angular/router';
import { routeBaseConfig } from '@utils/router.utils';
import { RedirectHandler } from 'undici-types';

export function studentRoutes(): Routes {
  const redirect: RedirectHandler = {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  };
  const home = {
    ...routeBaseConfig('home', 'Home', { icon: 'home' }),
    loadComponent: () =>
      import('@student_views/home/home.component').then(m => m.HomeComponent),
  };
  const testing = {
    ...routeBaseConfig('testing', 'Testing', { icon: 'school' }),
    loadComponent: () =>
      import('@student_views/testing/testing.component').then(
        m => m.TestingComponent
      ),
  };
  const everyday = {
    ...routeBaseConfig('everyday', 'Everyday', { icon: 'library_books' }),
    loadComponent: () =>
      import('@student_views/everyday/everyday.component').then(
        m => m.EverydayComponent
      ),
  };
  const profile = {
    ...routeBaseConfig('profile', 'Profile', { icon: 'person' }),
    loadComponent: () =>
      import('@views/profile/profile.component').then(
        m => m.ProfileComponent
      ),
  };
  const history = {
    ...routeBaseConfig('history', 'History', { icon: 'history' }),
    children: [
      {
        ...routeBaseConfig('', 'History'),
        loadComponent: () =>
          import('@views/history/history.component').then(
            m => m.HistoryComponent
          ),
      },
      {
        ...routeBaseConfig('dictionary', 'History -> Dictionary'),
        loadComponent: () =>
          import(
            '@views/history/history-everyday/history-everyday.component'
          ).then(m => m.HistoryEverydayComponent),
      },
      {
        ...routeBaseConfig('dictionary/:id', 'History -> Detail'),
        loadComponent: () =>
          import(
            '@views/history-everyday-detail/history-everyday-detail.component'
          ).then(m => m.HistoryEverydayDetailComponent),
      },
      {
        ...routeBaseConfig('testing', 'History -> Testing'),
        loadComponent: () =>
          import(
            '@views/history/history-testing/history-testing.component'
          ).then(m => m.HistoryTestingComponent),
      },
      {
        ...routeBaseConfig('testing/:id', 'History -> Detail'),
        loadComponent: () =>
          import(
            '@views/history-testing-detail/history-testing-detail.component'
          ).then(m => m.HistoryTestingDetailComponent),
      },
    ],
  };

  const login = {
    ...routeBaseConfig('login', 'Login', { icon: 'login' }),
    loadComponent: () =>
      import('@views/login/login.component').then(m => m.LoginComponent),
  };
  return [
    {
      path: 'student',
      loadComponent: () =>
        import('@student/student.component').then(m => m.StudentComponent),
      children: [redirect, home, testing, everyday, profile, history, login],
    },
  ];
}
