import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FieldMessage } from 'src/models/fieldmessage';
import { StorageService } from './../services/storage.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private storage: StorageService,
        private alertController: AlertController,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                switch (error.status) {

                    case 401:
                        this.handle401();
                        break;

                    case 403:
                        this.handle403();
                        break;

                    case 422:
                        this.handle422(error);
                        break;

                    default:
                        this.handleDefaultEror(error);
                }

                console.log('Erro detectado pelo interceptor:', error.error);
                return throwError(error);
            })
        );
    }

    async handle401() {
        const alert = await this.alertController.create({
            header: 'Erro 401: falha de autenticação',
            message: 'Email ou senha incorretos!',
            buttons: ['OK']
        });
        await alert.present();
    }

    handle403() {
        this.storage.setLocalUser(null);
    }

    async handle422(error) {
        const alert = await this.alertController.create({
            header: `Erro 422: Validação!`,
            message: this.listErrors(error.errors),
            buttons: ['Ok']
        });
        await alert.present();
    }


    async handleDefaultEror(error) {
        const alert = await this.alertController.create({
            header: `Erro ${error.status}: ${error.error}`,
            message: error.message,
            buttons: ['OK']
        });
        await alert.present();
    }

    private listErrors(messages: FieldMessage[]) {
        return messages.reduce((p, message) => p.concat('<p><strong>' + message.fieldName + '</strong>: ' + message.message + '</p>'), '');
    }
}


export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
