import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap, reduce } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CartService } from 'src/services/cart.service';
import { ProdutoService } from 'src/services/domain/produto.service';
import { CartItem } from './../../models/cart.item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  items$: Observable<CartItem[]>;

  constructor(
    public service: CartService,
    public produtoService: ProdutoService) {
    this.items$ = this.loadImageUrls(this.service.getCart().items);
  }

  loadImageUrls(items: CartItem[]) {
    return from(items).pipe(
      mergeMap(item => {
        return this.produtoService.getSmallImageFromBucket(item.produto.id).pipe(
          map<Blob, CartItem>(p => {
            const produto = ({ ...item.produto, imageUrl: `${environment.BUCKET_URL}/prod${item.produto.id}.jpg` });
            return { ...item, produto };
          }),
        );
      }),
      reduce<CartItem, CartItem[]>((cartItems, cartItem) => [...cartItems, cartItem], []),
    );
  }
}
