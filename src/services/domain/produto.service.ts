import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { ProdutoDTO } from './../../models/produto.dto';

@Injectable()
export class ProdutoService {

    constructor(public httpClient: HttpClient) { }

    findById = (productId: string) => this.httpClient.get<ProdutoDTO>(`${environment.API_URL}/produtos/${productId}`);
    getSmallImageFromBucket = (id: string) => this.httpClient.get(`${environment.BUCKET_URL}/prod${id}-small.jpg`, { responseType: 'blob' });
    getImageFromBucket = (id: string) => this.httpClient.get(`${environment.BUCKET_URL}/prod${id}.jpg`, { responseType: 'blob' });
    findByCategoria = (params = { categorias: '', page: '0', linesPerPage: '24' }) => this.httpClient.get<ProdutoDTO[]>(`${environment.API_URL}/produtos/`, { params });
}
