import { Request, Response } from 'express';

import { Usuario } from '../models/usuario';

export const listarUsuarios = async (req: Request, res: Response) => {
    try {
        // const query = { estado: true };
        // const usuarios = await Usuario.find(query);
        const usuarios = await Usuario.find();

        res.status(200).json({
            ok: true,
            usuarios
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const crearUsuario = async (req: Request, res: Response) => {
    try {
        const { nombre, correo, rol, img } = req.body;

        const usuario = new Usuario({ nombre, correo, rol, img });

        await usuario.save();

        res.status(200).json({
            ok: true,
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const actualizarUsuario = async (req: Request, res: Response) => {

    try {

        const id = req.params.id;

        const usuario = await Usuario.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({
            ok: true,
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const verUsuario = async (req: Request, res: Response) => {
    try {
        const uid = req.params.uid;

        const usuario = await Usuario.findById(uid);

        res.status(200).json({
            ok: true,
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}