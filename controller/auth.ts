import { Request, Response } from 'express';

import { googleVerify } from '../helpers/google-verify';
import { Usuario } from '../models/usuario';
import { generarJWT } from '../helpers/generar-jwt';

export const googleSignIn = async (req: Request, res: Response) => {


    try {
        const { id_token } = req.body;

        const { correo, nombre, img } = await googleVerify(id_token);

        let usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe.'
            });
        };

        // TODO: VERIFICAR QUE FUNCIONA UN USUARIO BLOQUEADO NO ENTRAR
        if (!usuario!.estado) {
            return res.status(401).json({
                msg: 'Hable con el administrador, usuario bloqueado.'
            });
        }

        // Generar el JWT
        const token = await generarJWT(usuario!.id);

        res.json({
            ok: true,
            usuario,
            token
        });

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: 'El token no se pudo verificar.'
        });
    }
}

export const renovarToken = async (req: Request, res: Response) => {

    const { usuario } = req;

    // Generar el JWT
    const token = await generarJWT(usuario.id);

    res.json({
        usuario,
        token
    });
}