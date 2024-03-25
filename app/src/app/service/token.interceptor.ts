import { HttpInterceptorFn } from '@angular/common/http';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {
  const bear_token = localStorage.getItem('apiToken');
  req = req.clone({
    url: `${req.url}`
  });
  if (bear_token) {
    req = req.clone({
      responseType: 'json',
      setHeaders: {
        Authorization: `Bearer ${bear_token}`
      }
    })
  }
  return next(req);
};
