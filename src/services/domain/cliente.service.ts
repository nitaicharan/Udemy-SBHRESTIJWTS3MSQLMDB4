import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImageUtilService } from '../image-util.service';
import { StorageService } from '../storage.service';
import { ClienteDTO } from './../../models/cliente.dto';

@Injectable()
export class ClienteService {

    constructor(
        private httpClient: HttpClient,
        private imageUtilService: ImageUtilService,
        private storageService: StorageService,
    ) {
    }

    findByEmail(value: string) {
        const params = new HttpParams({ fromObject: { value } });
        return this.httpClient.get(`${environment.API_URL}/clientes/email`, { params });
    }

    findById(id: string) {
        return this.httpClient.get<ClienteDTO>(`${environment.API_URL}/clientes/${id}`);
    }


    getImageFromBucket(id: string) {
        const url = `${environment.BUCKET_URL}/cp${id}.jpg`;
        return this.httpClient.get(url, { responseType: 'blob' });
    }

    insert(obj: ClienteDTO) {
        return this.httpClient.post(`${environment.API_URL}/clientes`, obj, { observe: 'response', responseType: 'text' });
    }

    uploadPicture(picture) {
        const pictureBlob = this.imageUtilService.dataUriToBlob(picture);
        const formData: FormData = new FormData();

        formData.set('file', pictureBlob, 'file.png');

        return this.httpClient.post(`${environment.API_URL}/clientes/picture`, formData, { observe: 'response', responseType: 'text' });
    }
}
