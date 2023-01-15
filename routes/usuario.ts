import { Router } from 'express';
import { check } from 'express-validator';

import { listarUsuarios, crearUsuario, actualizarUsuario, verUsuario } from '../controller/usuario';


import { emailExiste, esRoleValido } from '../helpers/db-validators';
import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRole } from '../middlewares/validar-roles';

const router = Router();

router.get('/', [
    validarJWT,
    esAdminRole,
    validarCampos
], listarUsuarios);

router.get('/:uid', [
    validarJWT,
    esAdminRole,
    validarCampos
], verUsuario);

router.post('/', [
    validarJWT,
    esAdminRole,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('img', 'La foto es obligatoria').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(emailExiste),
    check('rol').custom(esRoleValido),
    validarCampos
], crearUsuario);

router.put('/:id', [
    validarJWT,
    esAdminRole,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('img', 'La foto es obligatoria').not().isEmpty(),
    check('rol').custom(esRoleValido),
    validarCampos
], actualizarUsuario);

export default router;