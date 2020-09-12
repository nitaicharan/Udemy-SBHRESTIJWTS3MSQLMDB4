import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CidadeDTO } from 'src/models/cidade.dto';
import { environment } from '../../environments/environment';

@Injectable()
export class CidadeService {

    constructor(public http: HttpClient) {
    }

    findAll(estadoId: string): Observable<CidadeDTO[]> {
        return this.http.get<CidadeDTO[]>(`${environment.BASE_URL}/estados/${estadoId}/cidades`);
    }
}
