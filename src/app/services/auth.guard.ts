import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let authService = inject(AuthService);

  // authService.loadUserFromToken();
  if(!authService.isAuth) {
    router.navigate(['/auth']);
  }

  return true;
};
