import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalUser } from 'src/models/local-user.model';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { environment } from './../environments/environment';
import { CartService } from './cart.service';
import { StorageService } from './storage.service';


@Injectable()
export class AuthService {
    jwtHelper = new JwtHelperService();

    constructor(
        private http: HttpClient,
        private service: StorageService,
        private cartService: CartService,
    ) { }

    authenticate(creds: CredenciaisDTO) {
        const url = `${environment.API_URL}/login`;
        return this.http.post(url, creds, { observe: 'response', responseType: 'text' });
    }

    refreshToken() {
        const url = `${environment.API_URL}/auth/refresh_token`;
        return this.http.post(url, {}, { observe: 'response', responseType: 'text' });
    }

    successfulLogin(authorizationValue: string) {
        const tok = authorizationValue.substring('Berrer '.length);

        const user: LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.service.setLocalUser(user);
        this.cartService.createOrClearCart();
    }

    logout = () => this.service.setLocalUser(null);
}
