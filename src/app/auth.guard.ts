import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  
  
  const user = localStorage.getItem('user')
  const router = inject(Router);

  if (user === 'admin'||user === 'manu'|| user === 'anu') {
    return true;
  }else{
    router.navigateByUrl('login')
    return false;
  }
};

