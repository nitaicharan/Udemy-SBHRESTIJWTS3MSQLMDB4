import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { CategoriaService } from './../../services/domain/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {
  items$: Observable<CategoriaDTO[]>;
  bucketUrl: string = environment.bucketBaseUrl;

  constructor(categoriaService: CategoriaService) {
    this.items$ = categoriaService.findAll().pipe(
      map(response => response.body),
    );
  }
}
