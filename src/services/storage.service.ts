import { Injectable } from '@angular/core';
import { LocalUser } from 'src/models/local-user.model';


@Injectable()
export class StorageService {
    private STORAGE_KEYS = {
        localUser: 'localUser',
    };

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