import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  searchData: Array<any>;
  searchText: String;
  constructor(public navCtrl: NavController, public serviceProvider: ServiceProvider) {

  }
  getSearchCard(searchText) {
    this.searchData = null;
    this.serviceProvider.getSearch(searchText).subscribe(data => {
      this.searchData = data.Card;
    })
  }
}
