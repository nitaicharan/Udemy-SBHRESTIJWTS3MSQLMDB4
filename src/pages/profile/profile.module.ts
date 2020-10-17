import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicModule } from '@ionic/angular';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';



@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ProfilePageRoutingModule,
  ],
  providers: [Camera],
  declarations: [ProfilePage],
})
export class ProfilePageModule { }
