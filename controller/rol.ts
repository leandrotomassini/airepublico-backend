import { Request, Response } from 'express';

import { Rol } from '../models/rol';

export const getRoles = async (req: Request, res: Response) => {
    try {
        const query = { estado: true };

        const roles = await Rol.find();

        res.status(200).json({
            ok: true,
            roles
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const postRol = async (req: Request, res: Response) => {

    try {

        const rol = req.body.rol;

        const rolDB = await Rol.findOne({ rol });

        if (rolDB) {
            return res.status(400).json({
                msg: `El rol  ${rolDB.rol}, ya existe`
            });
        }

        const data = {
            rol: rol.toUpperCase(),
        }

        const rolNuevo = new Rol(data);

        // // Guardar DB
        await rolNuevo.save();

        res.status(200).json({
            ok: true,
            rolNuevo
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }

}

export const putRol = async (req: Request, res: Response) => {

    try {

        const id = req.params.id;

        const rol = await Rol.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({
            ok: true,
            rol
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const getRol = async (req: Request, res: Response) => {
    try {
        const rolId = req.params.id;

        
        const rol = await Rol.findById(rolId);

        res.status(200).json({
            ok: true,
            rol
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}