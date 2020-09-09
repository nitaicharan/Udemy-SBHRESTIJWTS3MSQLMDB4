import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { StorageService } from './../services/storage.service';

export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private storage: StorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                const errorObj = error.error ?? error;

                switch (errorObj.status) {
                    case 403:
                        this.handle403();
                        break;
                }

                console.log('Erro detectado pelo interceptor:', errorObj);
                return throwError(errorObj);
            })
        );
    }

    handle403() {
        this.storage.setLocalUser(null);
    }
}
