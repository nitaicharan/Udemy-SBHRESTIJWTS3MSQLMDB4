import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalUser } from 'src/models/local-user.model';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { environment } from './../environments/environment';
import { StorageService } from './storage.service';


@Injectable()
export class AuthService {

    constructor(
        public http: HttpClient,
        public storage: StorageService
    ) { }

    authenticate(creds: CredenciaisDTO) {
        const url = `${environment.BASE_URL}/login`;
        return this.http.post(url, creds, { observe: 'response', responseType: 'text' });
    }

    successfulLogin(authorizationValue: string) {
        const tok = authorizationValue.substring('Berrer '.length);

        const user: LocalUser = {
            token: tok
        };

        this.storage.setLocalUser(user);
    }

    logout = () => this.storage.setLocalUser(null);
}
