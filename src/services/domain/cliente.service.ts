import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storage.service';
import { ClienteDTO } from './../../models/cliente.dto';

@Injectable()
export class ClienteService {

    constructor(
        public http: HttpClient,
        public storageService: StorageService,
    ) {
    }

    findByEmail(value: string) {
        const params = new HttpParams({ fromObject: { value } });
        const token = this.storageService.getLocalUser().token;
        const authorization = `Bearer `.concat(token);
        return this.http.get<ClienteDTO>(`${environment.BASE_URL}/clientes/email`, { params, headers: { authorization } });
    }

    getImageFromBucket(id: string) {
        const url = `${environment.bucketBaseUrl}/cp${id}.jpg`;
        return this.http.get(url, { responseType: 'blob' });
    }
}