import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/Categoria.service';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoriaService: CategoriaService) {
  }

  /*evento executado quando a pagina terminar de ser carregada, lembrando que é uma função assincrona,
  dessa forma precisa se inscrever para fazer algo quando a resposta chegar. No angular, para se inscrever em uma chamada
  assincrona nós utilizamos o subscribe, dentro dele deve ser colocada uma função que será executada quando a resposta chegar.
  Essa é a famosa função callback que é uma função anonima, ou seja, uma arrow function.

  o subscribe tambem pode receber por parametro outra função para capturar erros.
  */
  ionViewDidLoad() {
    this.categoriaService.findAll()
      .subscribe(response => {
        console.log(response);
      },
      error =>{
        console.log(error);
      });
  }
}
