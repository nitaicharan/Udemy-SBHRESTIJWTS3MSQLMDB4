import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriaDTO } from '../../models/categoria.dto';

@Injectable()
export class CategoriaService {
    constructor(public httpClient: HttpClient) { }

    findAll() {
        return this.httpClient.get<CategoriaDTO[]>(`${environment.API_URL}/categorias`, { observe: 'response' });
    }
}
