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
  page = 0;
  items$: Observable<ProdutoDTO[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProdutoService,
  ) {
    this.items$ = this.loadData();
  }

  loadData(produtoDtos?: ProdutoDTO[]) {
    const categoriaId = this.activatedRoute.snapshot.params.categoriaId;
    return this.service.findByCategoria({ categorias: `${categoriaId}`, page: `${this.page}`, linesPerPage: `${10}` }).pipe(
      map(p => {
        if (produtoDtos) return [...p, ...produtoDtos]
        return p;
      }),
      switchMap(p => this.loadImageUrls(p)),
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

  doRefresh(event) {
    this.items$ = this.loadData().pipe(
      tap(() => this.page = 0),
      tap(() => setTimeout(() => event.target.complete(), 500))
    );
  }

  doInfinite(event, items: ProdutoDTO[]) {
    this.items$ = this.loadData(items).pipe(
      tap(() => this.page++),
      tap(() => setTimeout(() => event.target.complete(), 500))
    );
  }
}
