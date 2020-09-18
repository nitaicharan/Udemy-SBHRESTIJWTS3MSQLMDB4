import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CartService } from 'src/services/cart.service';
import { ProdutoService } from 'src/services/domain/produto.service';
import { ProdutoDTO } from './../../models/produto.dto';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.page.html',
  styleUrls: ['./produto-detail.page.scss'],
})
export class ProdutoDetailPage {
  item$: Observable<ProdutoDTO>;

  constructor(
    private router: Router,
    activatedRoute: ActivatedRoute,
    private service: ProdutoService,
    private cartService: CartService,
  ) {
    const id = activatedRoute.snapshot.params.produtoId;
    this.item$ = this.service.findById(id).pipe(
      switchMap(produtoDto => this.loadImageUrls(produtoDto)),
    );
  }

  loadImageUrls(items: ProdutoDTO) {
    return of(items).pipe(
      mergeMap(item => {
        return this.service.getImageFromBucket(item.id).pipe(
          map<Blob, ProdutoDTO>(() => ({ ...item, imageUrl: `${environment.BUCKET_URL}/prod${item.id}.jpg` })),
        );
      }),
    );
  }

  addToCart(produto: ProdutoDTO) {
    this.cartService.addProduto(produto);
    this.router.navigateByUrl('/cart');
  }
}
