import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class ProdutoService {

    constructor(public httpClient: HttpClient) { }

    findByCategoria = (categoriaId: string) => this.httpClient.get(`${environment.API_URL}/produtos/?categorias=${categoriaId}`);
    getSmallImageFromBucket = (id: string) => this.httpClient.get(`${environment.BUCKET_URL}/prod${id}-small.jpg`, { responseType: 'blob' });
}
