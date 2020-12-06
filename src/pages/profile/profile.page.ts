import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { Observable } from 'rxjs';
import { catchError, switchMap, take, tap } from 'rxjs/operators';
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
  profileImage;
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
        tap(response => this.cliente = response),
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

  getImageIfExists() {
    this.clienteService.getImageFromBucket(this.cliente.id).pipe(
      tap(() => this.cliente.imageUrl = `${environment.BUCKET_URL}/cp${this.cliente.id}.jpg`),
      switchMap(response => this.blobToDataURL(response)),
      tap<string>(response => this.profileImage = this.domSanitizer.bypassSecurityTrustResourceUrl(response)),
      catchError(() => this.profileImage = '/assets/imgs/avatar-blank.png'),
    ).subscribe();
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
      tap(() => this.getImageIfExists()),
    ).subscribe();
  }

  cancel() {
    this.picture = null;
  }

  blobToDataURL(blob) {
    return new Promise((fulfill, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = (e) => fulfill(reader.result);
      reader.readAsDataURL(blob);
    });
  }
}
