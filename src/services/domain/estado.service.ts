import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstadoDTO } from 'src/models/estado.dto';

@Injectable()
export class EstadoService {

    constructor(public http: HttpClient) {
    }

    findAll(): Observable<EstadoDTO[]> {
        return this.http.get<EstadoDTO[]>(`${environment.BASE_URL}/estados`);
    }
}
