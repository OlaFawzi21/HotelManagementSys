import { Injectable } from '@angular/core';

import { catchError, Observable, tap, throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';

import { MessageService } from 'primeng/api';

@Injectable()
export class HttpHandleResponseInterceptor implements HttpInterceptor {
  constructor(private _message: MessageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Handle success response
          const message = event?.body?.message;
          if (message && message.split(' ').length > 1) {
            this._message.add({
              severity: 'success',
              summary: 'Success',
              detail: message,
            });
          }
        }
      }),
      // catchError((httpError: HttpErrorResponse) => {
      //   let errorMessage = 'An error occurred';
      //   if (httpError.error?.message) {
      //     errorMessage = Array.isArray(httpError.error.message)
      //       ? httpError.error.message[0]
      //       : httpError.error.message;
      //   }

      //   // Handle error response
      //   this._message.add({
      //     severity: 'error',
      //     summary: 'Error',
      //     detail: errorMessage,
      //   });

      //   // Ensure error is propagated to the next level
      //   return throwError(() => new Error(errorMessage));
      // })
    );
  }
}
