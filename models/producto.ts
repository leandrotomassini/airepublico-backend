import { Schema, model } from 'mongoose';
import { IProducto } from '../interfaces/producto';



const ProductoSchema = new Schema<IProducto>({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio.']
    },
    costo: {
        type: Number,
        required: [true, 'El precio de costo es obligatorio.'],
        default: 0

    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio.'],
        default: 0

    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    fotos: {
        type: String
        required: [true, 'La foto es obligatoria']
    },
    categoriaProducto: {
        
    },
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
});

export const Articulo = model<ArticuloInterface>('Articulo', ArticuloSchema);