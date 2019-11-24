import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/Credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creeds: CredenciaisDTO = {
    email: "",
    senha: ""
  }
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {
  }

  login() {
    this.auth.authenticate(this.creeds)
      .subscribe(response => {
        this.auth.successFullLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});
  }

  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successFullLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});  
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

  signup(){
    this.navCtrl.push('SignupPage');
  }

}
