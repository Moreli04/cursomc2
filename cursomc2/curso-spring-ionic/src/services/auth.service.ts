import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/Credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { StorageService } from "./storage.service";
import { LocalUser } from "../models/local_user";
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthService {

    //objeto usado para extrair o email do token
    jwtHelper:JwtHelper = new JwtHelper();

    constructor(public http: HttpClient, public storage:StorageService) {

    }

    authenticate(creeds: CredenciaisDTO) {
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
                responseType: 'text'
            });
    }

    successFullLogin(authorizationValue:string){
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok,
            //isso faz pegar o email do token, bruxaria
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }

    logout(){
        this.storage.setLocalUser(null);
    }
}