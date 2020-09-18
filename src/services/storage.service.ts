import { Injectable } from '@angular/core';
import { Cart } from 'src/models/cart';
import { LocalUser } from 'src/models/local-user.model';


@Injectable()
export class StorageService {

    private STORAGE_KEYS = {
        localUser: 'UDEMY-SBHRESTIJWTS3MSQLMDB4_LOCALUSER',
        cart: 'UDEMY-SBHRESTIJWTS3MSQLMDB4_CART',
    };

    getCart(): Cart {
        const cart = localStorage.getItem(this.STORAGE_KEYS.cart);

        if (cart === null) {
            return null;
        }
        else {
            return JSON.parse(cart);
        }
    }

    setCart(obj: Cart) {
        if (obj != null) {
            localStorage.setItem(this.STORAGE_KEYS.cart, JSON.stringify(obj));
        }
        else {
            localStorage.removeItem(this.STORAGE_KEYS.cart);
        }
    }

    getLocalUser(): LocalUser {
        const usr = localStorage.getItem(this.STORAGE_KEYS.localUser);

        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj: LocalUser) {
        if (obj == null) {
            localStorage.removeItem(this.STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(this.STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
}