import { Component } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ClienteDTO } from 'src/models/cliente.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  email: string;
  cliente: ClienteDTO;

  constructor(
    private clienteService: ClienteService,
    private storageService: StorageService,
  ) {
    const localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).pipe(
        tap(response => this.cliente = response),
        tap(() => this.cliente.imageUrl = `${environment.bucketBaseUrl}/cp${this.cliente.id}.jpg`),
        take(1),
      ).subscribe();
    }
  }
}
