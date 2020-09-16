import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProdutoDTO } from 'src/models/produto.dto';
import { ProdutoService } from 'src/services/domain/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage {
  items$: Observable<ProdutoDTO[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService,
  ) {
    const categoriaId = this.activatedRoute.snapshot.params.categoriaId;

    this.items$ = this.produtoService.findByCategoria(categoriaId).pipe(
      map(response => response['content'])
    );
  }
}
