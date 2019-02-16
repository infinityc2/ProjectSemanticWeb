import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type',
  templateUrl: 'type.html',
})
export class TypePage {
  types: Array<any>;
  selectType: String;
  getTypes: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.serviceProvider.getType().subscribe(types => {
      this.types = types.data;
    })
    
  }

  getTypeCard(select) {
    this.getTypes = null;
    return this.serviceProvider.postType(select).subscribe(data => {
      this.getTypes = data.Card;
    })
  }

}
