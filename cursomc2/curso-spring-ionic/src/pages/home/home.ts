import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  login() {
    this.navCtrl.setRoot('CategoriasPage');
  }

  // evento de entrar na pagina
  ionViewWillEnter() {
    //desabilita o arraste do menu
    this.menu.swipeEnable(false);
  }

  //evento de sair da pagina
  ionViewDidLeave() {
    //habilita o arraste do menu
    this.menu.swipeEnable(true);
  }

}
