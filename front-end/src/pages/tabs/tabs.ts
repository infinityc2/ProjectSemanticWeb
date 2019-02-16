import { Component } from '@angular/core';

import { CardListPage } from '../card-list/card-list';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CardListPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
