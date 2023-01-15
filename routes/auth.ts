import { Router } from 'express';
import { check } from 'express-validator';

import { validarCampos } from '../middlewares/validar-campos';
import { googleSignIn, renovarToken } from '../controller/auth';
import { validarJWT } from '../middlewares/validar-jwt';


const router = Router();

router.post('/google', [
    check('id_token', 'El Id Token de Google es necesario.').not().isEmpty(),
    validarCampos
], googleSignIn);

router.get('/renew', validarJWT, renovarToken);


export default router;