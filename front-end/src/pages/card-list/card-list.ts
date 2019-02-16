import { TypePage } from './../type/type';
import { RarityPage } from './../rarity/rarity';
import { ManacostPage } from './../manacost/manacost';
import { ClassPage } from './../class/class';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from './../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-card-list',
  templateUrl: 'card-list.html',
})
export class CardListPage {
  heroes: Array<any>;
  rarities: Array<any>;
  manacost: Array<any>;
  types: Array<any>;
  cards: Array<any>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public serviceProvider: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.serviceProvider.getHero().subscribe(heroes => {
      this.heroes = heroes.data;
    })

    this.serviceProvider.getRarity().subscribe(rarities => {
      this.rarities = rarities.data;
    })

    this.serviceProvider.getManaCost().subscribe(manacost => {
      this.manacost = manacost.data;
    })

    this.serviceProvider.getType().subscribe(type => {
      this.types = type.data;
    })

    this.serviceProvider.getAllCard().subscribe(card => {
      this.cards = card.data;
    })
  }

  linkClass(): void {
    // this.navCtrl.setRoot(ClassPage);
    this.navCtrl.push(ClassPage);
  }

  linkManaCost(): void {
    //this.navCtrl.setRoot(ManacostPage);
    this.navCtrl.push(ManacostPage);
  }

  linkRarity(): void {
    // this.navCtrl.setRoot(RarityPage);
    this.navCtrl.push(RarityPage);
  }

  linkType(): void {
    // this.navCtrl.setRoot(TypePage);
    this.navCtrl.push(TypePage);
  }

}
