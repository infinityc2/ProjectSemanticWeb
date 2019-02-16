import { ServiceProvider } from './../../providers/service/service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    ServiceProvider
  ],
})
export class RarityPageModule {}