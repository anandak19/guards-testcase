import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const profileMatchGuard: CanActivateFn = (route, state) => {

  const user = localStorage.getItem('user')
  const router = inject(Router);

  if (user === 'admin') {
    return true;
  }else{
    return false;
  }
};