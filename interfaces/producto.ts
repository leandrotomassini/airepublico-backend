import { ICategoriaProducto } from "./categoria-producto";
import { IUsuario } from "./usuario";


export interface IProducto {
    nombre: string;
    costo: number;
    precio: number;
    descripcion: string;
    fotos: string[];
    categoriaProducto: ICategoriaProducto;
    usuario: IUsuario;
    estado: boolean;
    fecha: string;
}