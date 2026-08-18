import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/internal/operators/finalize';
import { DdrSpinnerService } from 'ddr-ng/spinner';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {

  const ddrSpinnerService: DdrSpinnerService = inject(DdrSpinnerService);

  ddrSpinnerService.showSpinner();
  return next(req).pipe(
    finalize(() => {
      ddrSpinnerService.hideSpinner();
    })
  );;
};
