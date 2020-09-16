import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { ProdutoDTO } from './../../models/produto.dto';

@Injectable()
export class ProdutoService {

    constructor(public http: HttpClient) {
    }

    findByCategoria(categoriaId: string) {
        return this.http.get(`${environment.BASE_URL}/produtos/?categorias=${categoriaId}`);
    }
}
