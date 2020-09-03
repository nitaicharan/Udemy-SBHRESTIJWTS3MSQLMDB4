import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { LocalUser } from 'src/models/local-user.model';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { environment } from './../environments/environment';
import { StorageService } from './storage.service';


@Injectable()
export class AuthService {
    jwtHelper = new JwtHelperService();

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
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };

        this.storage.setLocalUser(user);
    }

    logout = () => this.storage.setLocalUser(null);
}
