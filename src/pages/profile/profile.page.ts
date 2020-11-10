import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
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
  cameraOn = false;
  cliente: ClienteDTO;
  picture: SafeResourceUrl;

  constructor(
    private router: Router,
    private domSanitizer: DomSanitizer,
    private clienteService: ClienteService,
    private storageService: StorageService,
  ) {
    this.loadData();
  }

  loadData() {
    const localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).pipe(
        tap(response => this.cliente = response as ClienteDTO),
        tap(() => this.cliente.imageUrl = `${environment.BUCKET_URL}/cp${this.cliente.id}.jpg`),
        catchError(error => {
          if (error.status) { this.router.navigateByUrl('/'); }
          return new Observable();
        }),
        take(1),
      ).subscribe();
    }
    else this.router.navigateByUrl('/');
  }

  async getCameraPicture() {
    const { Camera } = Plugins;
    const result = await Camera.getPhoto({
      quality: 75,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.DataUrl,
    });

    this.picture = this.domSanitizer.bypassSecurityTrustResourceUrl(result && result.dataUrl);
  }

  async getGalleryPicture() {
    const { Camera } = Plugins;
    const result = await Camera.getPhoto({
      quality: 75,
      allowEditing: true,
      source: CameraSource.Photos,
      resultType: CameraResultType.DataUrl,
    });

    this.picture = this.domSanitizer.bypassSecurityTrustResourceUrl(result && result.dataUrl);
  }

  sendPicture() {
    this.clienteService.uploadPicture(this.picture).pipe(
      tap(() => this.picture = null),
      tap(() => this.loadData()),
    ).subscribe();
  }

  cancel() {
    this.picture = null;
  }
}
