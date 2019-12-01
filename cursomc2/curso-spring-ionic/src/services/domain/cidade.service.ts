import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { CidadeDTO } from "../../models/Cidade.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class CidadeService{

    constructor(public http: HttpClient){

    }

    /*
        Requisição em http é assincrona, é uma chamada ajax. O angular encapsula o mecanismo de recepção assincrona 
        em um objeto chamado o observable
    */
  

    findAll(estado_id:string) : Observable<CidadeDTO[]>  {
        return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`);
    }
}