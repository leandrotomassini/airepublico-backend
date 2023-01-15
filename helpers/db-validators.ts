import { Rol } from '../models/rol';
import { Usuario } from '../models/usuario';

export const esRoleValido = async(rol = '') => {

    const existeRol = await Rol.findOne({ rol });
    
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }
}


export const emailExiste = async( correo = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo }, ya está registrado`);
    }
}