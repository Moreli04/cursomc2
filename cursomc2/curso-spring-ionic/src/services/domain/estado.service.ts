import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { EstadoDTO } from "../../models/Estado.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class EstadoService{

    constructor(public http: HttpClient){

    }

    /*
        Requisição em http é assincrona, é uma chamada ajax. O angular encapsula o mecanismo de recepção assincrona 
        em um objeto chamado o observable
    */
  

    findAll() : Observable<EstadoDTO[]>  {
        return this.http.get<EstadoDTO[]>(`${API_CONFIG.baseUrl}/estados`);
    }
}