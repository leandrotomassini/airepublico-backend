import { IProducto } from "./producto";
import { IUsuario } from "./usuario";

export interface ICompra {
    usuario: IUsuario;
    fecha: string;
    estado: boolean;
    montoTotal: number;
    productos: IProducto[];
}