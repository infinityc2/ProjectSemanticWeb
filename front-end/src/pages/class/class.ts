import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class',
  templateUrl: 'class.html',
})
export class ClassPage {
  heroes: Array<any>;
  selectHero: String;
  getHeroes: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.serviceProvider.getHero().subscribe(heroes => {
      this.heroes = heroes.data;
    })
  }

  getHeroCard(select) {
    this.getHeroes = null;
    return this.serviceProvider.postHero(select).subscribe(data => {
      this.getHeroes = data.Card;
    })
  }
}
