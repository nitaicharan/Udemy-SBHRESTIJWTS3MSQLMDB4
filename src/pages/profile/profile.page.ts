import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
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
    private router: Router,
  ) {
    const localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).pipe(
        tap(response => this.cliente = response),
        tap(() => this.cliente.imageUrl = `${environment.BUCKET_URL}/cp${this.cliente.id}.jpg`),
        catchError(error => {
          if (error.status) { this.router.navigateByUrl('/'); }
          return new Observable();
        }),
        take(1),
      ).subscribe();
    }
    else { this.router.navigateByUrl('/'); }
  }
}
