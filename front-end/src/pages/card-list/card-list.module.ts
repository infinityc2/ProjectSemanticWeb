import { ServiceProvider } from './../../providers/service/service';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardListPage } from './card-list';

@NgModule({
  declarations: [
    CardListPage,
  ],
  imports: [
    IonicPageModule.forChild(CardListPage),
    ServiceProvider
  ],
})
export class CardListPageModule {}
