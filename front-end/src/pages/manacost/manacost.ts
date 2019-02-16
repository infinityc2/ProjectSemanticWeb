import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManacostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manacost',
  templateUrl: 'manacost.html',
})
export class ManacostPage {
  manas: Array<any>;
  result: Array<any>;
  selectMana: Number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServiceProvider) {

  }

  ionViewDidLoad() {
    this.serviceProvider.getManaCost().subscribe(mana => {
      this.manas = mana.data;
    })
  }

  getManaCard(select) {
    this.result = null;
    return this.serviceProvider.postMana(select).subscribe(data => {
      this.result = data.Card;
    })
  }
  
}
