import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map, mergeMap, reduce, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProdutoService } from 'src/services/domain/produto.service';
import { ProdutoDTO } from './../../models/produto.dto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage {
  items$: Observable<ProdutoDTO[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProdutoService,
  ) {
    const categoriaId = this.activatedRoute.snapshot.params.categoriaId;

    this.items$ = this.service.findByCategoria(categoriaId).pipe(
      switchMap(produtoDtos => this.loadImageUrls(produtoDtos)),
    );
  }

  loadImageUrls(items: ProdutoDTO[]) {
    return from(items).pipe(
      mergeMap(item => {
        return this.service.getSmallImageFromBucket(item.id).pipe(
          map<Blob, ProdutoDTO>(() => ({ ...item, imageUrl: `${environment.BUCKET_URL}/prod${item.id}-small.jpg` })),
        );
      }),
      reduce<ProdutoDTO, ProdutoDTO[]>((lista, produto) => [...lista, produto], []),
    );
  }
}
