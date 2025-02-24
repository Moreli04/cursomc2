import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/Categoria.dto';
import { API_CONFIG } from '../../config/api.config';

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

  bucketUrl: string = API_CONFIG.bucketBaseUrl;
  items: CategoriaDTO[];

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
        this.items = response;
      },
      error => {});
  }

  showProdutos(categoria_id: string) {
    //importante, os dois parametros dentro de chaves corresponder a nome do parametro e valor, nao precisam ter os mesmos nomes
    this.navCtrl.push('ProdutosPage', { categoria_id: categoria_id });
  }
}