import { Schema, model } from 'mongoose';

import { ICompra } from '../interfaces/compra';

const CompraSchema = new Schema<ICompra>({
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    fecha: {
        type: String,
        required: [true, 'La fecha de la compra es obligatoria.']
    },
    estado: {
        type: Boolean,
        default: true
    },
    montoTotal: {
        type: Number,
        required: [true, 'El monto total de la compra es obligatorio.'],
        default: 0
    },
    productos: [
        {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'Producto'
        }
    ]
});

export const Compra = model<ICompra>('Compra', CompraSchema);