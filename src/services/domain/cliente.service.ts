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
        return this.http.get(`${environment.API_URL}/clientes/email`, { params });
    }

    findById(id: string) {
        return this.http.get<ClienteDTO>(`${environment.API_URL}/clientes/${id}`);
    }


    getImageFromBucket(id: string) {
        const url = `${environment.BUCKET_URL}/cp${id}.jpg`;
        return this.http.get(url, { responseType: 'blob' });
    }

    insert(obj: ClienteDTO) {
        return this.http.post(`${environment.API_URL}/clientes`, obj, { observe: 'response', responseType: 'text' });
    }
}
