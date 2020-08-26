import { Component } from '@angular/core';
import { CategoriaService } from './../../services/domain/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {

  constructor(public categoriaService: CategoriaService) {
    categoriaService.findAll().subscribe(console.log, console.log);
  }
}
