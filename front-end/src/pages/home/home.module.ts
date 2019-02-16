import { HomePage } from './home';
import { ServiceProvider } from './../../providers/service/service';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ServiceProvider
  ],
})
export class HomePageModule {}
