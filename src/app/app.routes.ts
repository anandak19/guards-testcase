import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { profileMatchGuard } from './profile-match.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login-form/login-form.component').then(
        (c) => c.LoginFormComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then((c) => c.ProfileComponent),
    canMatch: [profileMatchGuard],
  },

  {
    path: 'profile',
    loadComponent: () =>
      import('./not-access/not-access.component').then(
        (c) => c.NotAccessComponent
      ),
  },
];
