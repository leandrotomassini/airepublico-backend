import { Schema, model } from 'mongoose';

import { ICategoriaProducto } from '../interfaces/categoria-producto';

const CategoriaSchema = new Schema<ICategoriaProducto>({
    categoria: {
        type: String,
        required: [true, 'La categoría del producto es obligatoria']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

export const CategoriaProducto = model<ICategoriaProducto>('CategoriasProducto', CategoriaSchema);