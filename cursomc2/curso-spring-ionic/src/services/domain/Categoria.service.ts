import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { CategoriaDTO } from "../../models/Categoria.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class CategoriaService{

    constructor(public http: HttpClient){

    }

    /*
        Requisição em http é assincrona, é uma chamada ajax. O angular encapsula o mecanismo de recepção assincrona 
        em um objeto chamado o observable
    */
  

    findAll() : Observable<CategoriaDTO[]>  {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}