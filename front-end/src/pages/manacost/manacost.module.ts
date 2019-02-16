import { ServiceProvider } from './../../providers/service/service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManacostPage } from './manacost';

@NgModule({
  declarations: [
    ManacostPage,
  ],
  imports: [
    IonicPageModule.forChild(ManacostPage),
    ServiceProvider
  ],
})
export class ManacostPageModule {}
