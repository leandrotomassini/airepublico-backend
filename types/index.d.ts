import { UsuarioInterface } from '../interfaces/usuario';
export { };

declare global {
    namespace Express {
        interface Request {
            usuario: UsuarioInterface;
        }
    }
}