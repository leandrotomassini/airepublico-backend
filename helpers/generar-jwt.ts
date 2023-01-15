import jwt from 'jsonwebtoken';

import { SECRETORPRIVATEKEY } from '../global/enviroment';
import { Usuario } from '../models/usuario';
import { JwtPayload } from '../middlewares/validar-jwt';


export const generarJWT = (uid = '') => {

    return new Promise((resolve, reject) => {

        const payload = { uid };

        jwt.sign(payload, SECRETORPRIVATEKEY, {
            expiresIn: '400h'
        }, (err, token) => {

            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }
        })

    })
}


export const comprobarJWT = async (token = '') => {
    try {

        if (token.length < 10) {
            return null;
        }

        const { uid } = jwt.verify(token, SECRETORPRIVATEKEY) as JwtPayload;
        const usuario = await Usuario.findById(uid);

        if (usuario) {
            if (usuario.estado) {
                return usuario;
            } else {
                return null;
            }
        } else {
            return null;
        }

    } catch (error) {
        return null;
    }
}



