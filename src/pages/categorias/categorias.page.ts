import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { CategoriaService } from './../../services/domain/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {
  bucketUrl: string = environment.bucketBaseUrl;
  items: CategoriaDTO[];

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
  ) {
    this.categoriaService.findAll()
      .subscribe(response => {
        this.items = response;
      },
        error => { });
  }

  showProdutos() {
    this.router.navigateByUrl('/produtos');
  }
}
