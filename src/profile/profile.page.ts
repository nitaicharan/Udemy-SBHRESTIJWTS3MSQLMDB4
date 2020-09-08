import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  email: string;

  constructor(private storageService: StorageService) {
    const localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email) {
      this.email = localUser.email;
    }
  }

  ngOnInit() {
  }
}
