import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { environment } from './../environments/environment';


@Injectable()
export class AuthService {

    constructor(public http: HttpClient) {
    }

    authenticate(creds: CredenciaisDTO) {
        return this.http.post(`${environment.BASE_URL}/login`, creds, { observe: 'response', responseType: 'text' });
    }
}
