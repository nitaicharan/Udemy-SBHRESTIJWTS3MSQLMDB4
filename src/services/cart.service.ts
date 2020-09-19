import { Injectable } from '@angular/core';
import { Cart } from 'src/models/cart';
import { ProdutoDTO } from 'src/models/produto.dto';
import { StorageService } from './storage.service';

@Injectable()
export class CartService {

    constructor(public storage: StorageService) {
    }

    createOrClearCart(): Cart {
        const cart: Cart = { items: [] };
        this.storage.setCart(cart);
        return cart;
    }

    getCart(): Cart {
        let cart: Cart = this.storage.getCart();
        if (cart == null) {
            cart = this.createOrClearCart();
        }
        return cart;
    }

    addProduto(produto: ProdutoDTO): Cart {
        const cart = this.getCart();
        const position = cart.items.findIndex(x => x.produto.id === produto.id);
        if (position === -1) {
            cart.items.push({ quantidade: 1, produto });
        }
        this.storage.setCart(cart);
        return cart;
    }

    removeProduto(produto: ProdutoDTO): Cart {
        const cart = this.getCart();
        const position = cart.items.findIndex(x => x.produto.id === produto.id);
        if (position !== -1) {
            cart.items.splice(position, 1);
        }
        this.storage.setCart(cart);
        return cart;
    }

    increaseQuantity(produto: ProdutoDTO): Cart {
        const cart = this.getCart();
        const position = cart.items.findIndex(x => x.produto.id === produto.id);
        if (position !== -1) {
            cart.items[position].quantidade++;
        }
        this.storage.setCart(cart);
        return cart;
    }

    decreaseQuantity(produto: ProdutoDTO): Cart {
        let cart = this.getCart();
        const position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position !== -1) {
            cart.items[position].quantidade--;
            if (cart.items[position].quantidade < 1) {
                cart = this.removeProduto(produto);
            }
        }
        this.storage.setCart(cart);
        return cart;
    }

    total(): number {
        const cart = this.getCart();
        return cart.items.reduce((total, item) => item.produto.preco * item.quantidade + total, 0);
    }
}
