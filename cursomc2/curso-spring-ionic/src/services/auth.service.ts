import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/Credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class AuthService{
    
    constructor(public http:HttpClient){

    }

    authenticate(creeds:CredenciaisDTO){
       return this.http.post(
           `${API_CONFIG.baseUrl}/login`,
            creeds,
            /*
                Especificando o response pois sera necessario obter informações do cabeçalho dele
                O corpo da resposta do back estará vazio então é preciso  especificar o Response type como text para
                que o angular nao tente fazer o parse do corpo para Json.
            */
            {
                observe: 'response',
                responseType:'text'
            });
    }
}