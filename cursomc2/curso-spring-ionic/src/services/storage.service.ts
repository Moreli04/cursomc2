import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local_user";
import { STORAGE_KEYS } from "../config/storage_keys.config";

@Injectable()
export class StorageService {

    getLocalUser(): LocalUser {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null)
            return null;
        /*
            o localStorage armazena como string, então precisa fazer o parse para converter para a 
            minha interface LocalUser
        */
        return JSON.parse(usr);
    }

    setLocalUser(obj: LocalUser) {
        /*
        Se passar null é pq quer remover o usuario logado,
        caso contrario adiciona o usuario convertendo o obj para string
        */
        if (obj == null) 
            localStorage.removeItem(STORAGE_KEYS.localUser);
        else 
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        

    }
}