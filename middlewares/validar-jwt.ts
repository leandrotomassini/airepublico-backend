import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { SECRETORPRIVATEKEY } from '../global/enviroment';

import { Usuario } from '../models/usuario';

export interface JwtPayload {
    uid: string
}


export const  validarJWT = async (req: Request, res: Response, next: Function) => {

    try {

        const token = req.header('x-token');

        if (!token) {
            return res.status(401).json({
                msg: 'No hay token en la petición'
            });
        }

        const { uid } = jwt.verify(token, SECRETORPRIVATEKEY) as JwtPayload;

        // leer el usuario que corresponde al uid
        const usuario = await Usuario.findById(uid);

        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }

        // Verificar si el uid tiene estado true
        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        }


        req.usuario = usuario;
        next();

    } catch (error) {

        // console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}
