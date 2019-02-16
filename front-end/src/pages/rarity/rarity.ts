import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the RarityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rarity',
  templateUrl: 'rarity.html',
})
export class RarityPage {
  rarities: Array<any>;
  selectRarity: String;
  getRarities: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.serviceProvider.getRarity().subscribe(rarities => {
      this.rarities = rarities.data;
    })
    
  }

  getRarityCard(select) {
    this.getRarities = null;
    return this.serviceProvider.postRare(select).subscribe(data => {
      this.getRarities = data.Card;
    })
  }
}
