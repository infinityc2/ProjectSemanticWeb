import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  public API = 'http://localhost:8080';
  public hearthstoneAPI = this.API + '/hearthstone';

  constructor(public http: HttpClient) {
    
  }

  getHero(): Observable<any> {
    return this.http.get(this.hearthstoneAPI + '/hero');
  }

  getRarity(): Observable<any> {
    return this.http.get(this.hearthstoneAPI + '/rarity');
  }

  getManaCost(): Observable<any> {
    return this.http.get(this.hearthstoneAPI + '/mana');
  }

  getType(): Observable<any> {
    return this.http.get(this.hearthstoneAPI + '/type');
  }

  getAllCard(): Observable<any> {
    return this.http.get(this.hearthstoneAPI + '/card')
  }

  postHero(hero: String): Observable<any> {
    return this.http.get(this.hearthstoneAPI + '/hero/new' + '/' + hero);
  }

  postMana(mana: Number): Observable<any> {
    return this.http.get(this.hearthstoneAPI + '/mana/new' + '/' + mana);
  }

  postRare(rare: String): Observable<any> {
    return this.http.get(this.hearthstoneAPI + '/rarity/new' + '/' + rare);
  }

  postType(type: String): Observable<any> {
    return this.http.get(this.hearthstoneAPI + '/type/new' + '/' + type);
  }

  getSearch(search: String):Observable<any> {
    return this.http.get(this.hearthstoneAPI + '/card/search' + '/' + search);
  }

}
