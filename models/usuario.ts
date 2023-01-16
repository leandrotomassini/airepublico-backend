import { Schema, model } from 'mongoose';

import { IUsuario } from '../interfaces/usuario';


const UsuarioSchema = new Schema<IUsuario>({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        default: 'USER_ROLE',
        emun: ['ADMIN_ROLE', 'USER_ROLE', 'INSTRUCTOR_ROLE', 'ALUMN_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
});

UsuarioSchema.methods.toJSON = function () {
    const { __v, _id, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
}

export const Usuario = model<IUsuario>('Usuario', UsuarioSchema);