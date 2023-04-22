import ApiService from '../apiservice';
import LocalStorageService from './localStorageService'
import jwt_decode from "jwt-decode";

export const USUARIO_LOGADO = '_usuario_logado'
export const TOKEN = 'acess_token'
export default class AuthService {

    static isUsuarioAutenticado(){
        const token = LocalStorageService.obterItem(TOKEN)
        const decodeToken = jwt_decode(token);
        const expiration = decodeToken.horaExpiracao;
        const isTokenInvalido = Date.now() >= expiration

        return !isTokenInvalido;
    }
    
    static removerUsuarioAutenticado(){
        LocalStorageService.removerItem(USUARIO_LOGADO)
    }

    static logar(usuario, token){
        LocalStorageService.adicionarItem(USUARIO_LOGADO,usuario);
        LocalStorageService.adicionarItem(TOKEN, token)
        ApiService.registrarToken(token)
    }

    static obterUsuarioAutenticado(){
        return LocalStorageService.obterItem(USUARIO_LOGADO);
    }

    static refreshSession(){
        const token = LocalStorageService.obterItem(TOKEN);
        const usuario = this.obterUsuarioAutenticado();
        AuthService.logar(usuario,token)
        return usuario;
    }
}