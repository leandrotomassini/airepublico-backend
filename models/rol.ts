import { Schema, model } from 'mongoose';

import { RolInterface } from '../interfaces/rol';

const RoleSchema = new Schema<RolInterface>({
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

export const Rol = model<RolInterface>('Role', RoleSchema);